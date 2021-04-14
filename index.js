const core = require('@actions/core');
const github = require('@actions/github');
const { Context } = require('@actions/github/lib/context');

/**
 * Parses the title
 * @param  {Object} payload Payload containing the title
 * @return {String}         String containing the requester's email
 */
function parseTitle(payload) {
    const title = payload.issue.title;

    if (title.includes("Teammate request:")) {
        return "a";
    } else {
        return "";
    }
}

/**
 * The main function for finding legal teammates
 */
async function main() {
    try {
        const githubSecret = core.getInput("github-token");
        const context = github.context;
        const payload = context.payload;
        const { issue } = github.context;
    
        // Checks if the triggering action is caused by an issue
        if (!payload.issue) {
            core.debug(
              "This event is not an issue being opened"
            );
            return;
        }

        const parsedTitle = parseTitle(payload);

        if (parsedTitle != "") {
            console.log("title contains Teammate request:");
        } else {
            console.log("wrong title");
        }

        const octokit = github.getOctokit(githubSecret);

        // Closes the issue
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