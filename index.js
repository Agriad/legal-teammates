const core = require('@actions/core');
const github = require('@actions/github');

function main() {
    try {
        const githubSecret = core.getInput("github-token");
        const context = github.context;
        const payload = context.payload;
    
        if (!payload.issue) {
            core.debug(
              "This event is not an issue being opened"
            );
            return;
          }
       
    } catch (error) {
        core.setFailed(error.message);
    }   
}

main()