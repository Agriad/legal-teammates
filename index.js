const core = require('@actions/core');
const github = require('@actions/github');
const { Context } = require('@actions/github/lib/context');

function parseTitle(payload) {
    const title = payload.issue.title;

    if (title.includes("Teammate request:")) {
        return true;
    } else {
        return false;
    }
}

async function main() {
    try {
        const githubSecret = core.getInput("github-token");
        const context = github.context;
        const payload = context.payload;
        const { issue } = github.context;
    
        if (!payload.issue) {
            core.debug(
              "This event is not an issue being opened"
            );
            return;
        }

        const parsedTitle = parseTitle(payload);

        if (parsedTitle) {
            console.log("title contains Teammate request:");
        } else {
            console.log("wrong title");
        }

        const octokit = github.getOctokit(githubSecret);
        const issueNumber = core.getInput("issue-number");
        const repository = core.getInput('repository');
        const repositoryData = repository.split('/');
        const owner = repositoryData[0];
        const repo = repositoryData[1];

        console.log(context);

        await octokit.issues.update({
            owner: issue.owner,
            repo: issue.repo,
            issue_number: issue.number,
            state: 'closed'
        });

        console.log(`It is working`);
       
    } catch (error) {
        core.setFailed(error.message);
    }   
}

main()