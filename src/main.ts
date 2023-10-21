// @deno-types="https://deno.land/x/chalk_deno@v4.1.1-deno/index.d.ts"
import chalk from "https://deno.land/x/chalk_deno@v4.1.1-deno/source/index.js";

import { ActionArgs } from "./action_args.ts";
import { agent_caller } from "./agent_call.ts";

function logSuccess(msg: string) {
  console.log(chalk.green(msg));
}

export async function rebyte_main({context, args}: {
  context: any;
  args: ActionArgs;
}) {
  console.log("rebyte main called with args:", args);
  console.log("rebyte main called with context:", context);
  const res = await agent_caller(args, context);
  return res
}
