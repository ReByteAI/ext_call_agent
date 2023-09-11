// import chalk from "npm:chalk";
// import { Octokit } from 'npm:octokit';

// @deno-types="https://deno.land/x/chalk_deno@v4.1.1-deno/index.d.ts"
import chalk from "https://deno.land/x/chalk_deno@v4.1.1-deno/source/index.js";
import Client from 'https://deno.land/x/denohub@0.1.1/index.ts';
import { GoogleAPI } from "https://deno.land/x/google_deno_integration@v1.1/mod.ts";

import { create_github_issue } from "./github.ts";
import { BlockArgs } from "./block_args.ts";

//Expiration and aud are optional. Change the options below to yours:
const api = new GoogleAPI({
    email: "my-email-example@chama-la.iam.gserviceaccount.com",
    scope: ["https://www.googleapis.com/auth/androidpublisher"],
    key: "-----BEGIN PRIVATE KEY-----\nXXXXXXXXXXXX",
})

const client = new Client({
  authOptions: {
      oauthToken: "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"
  }
})

function logSuccess(msg: string) {
  console.log(chalk.green(msg));
}

const url = await create_github_issue();

/// rebyte_main func can't be async function
// deno-lint-ignore no-explicit-any
export function rebyte_main(env: any, args: BlockArgs) {
  logSuccess("Hello World from 0.0.3!");
  console.log("rebyte main args", args)
  console.log(url);
  return env
}