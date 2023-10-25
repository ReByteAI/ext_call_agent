import { ActionArgs } from "./action_args.ts";
import { agent_caller } from "./agent_call.ts";

export async function rebyte_main({context, args}: {
  context: any;
  args: ActionArgs;
}) {
  console.log("rebyte main called with args:", args);
  console.log("rebyte main called with context:", context);
  const res = await agent_caller(args, context);
  return res
}
