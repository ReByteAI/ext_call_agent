const token = "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";
const owner = "g1g2-lab";
const repo = "ios";

const issue = {
  title: "Issue title",
  body: "Issue body",
};

export async function create_github_issue() {
  if (token) {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
      method: "POST",
      headers: {
        "Authorization": `token ${token}`,
        "Accept": "application/vnd.github.v3+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(issue),
    });
  
    if (response.ok) {
      const issue = await response.json();
      console.log(`Issue created: ${issue.html_url}`);
    } else {
      console.log(`Failed to create issue: ${response.statusText}`);
    }
  } else {
    console.log("Please set the GITHUB_TOKEN environment variable");
  }
}