import chalk from "https://deno.land/x/chalk_deno@v4.1.1-deno/source/index.js";


import { ActionArgs } from "./action_args.ts";
import {callable_caller} from "./callable.ts";

function logSuccess(msg: string) {
  // console.log(chalk.green(msg));
  console.log(msg);
}

export async function rebyte_main(env: any, args: ActionArgs) {
  await callable_caller(args).then((res) => {
    logSuccess("call callable success");
    console.log("rebyte main returns:", res)
  }).catch((err) => {
    console.log("call callable error", err)
  })
}