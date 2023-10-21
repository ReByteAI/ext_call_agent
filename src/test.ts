import { rebyte_main } from "./main.ts";
import { ActionArgs } from "./action_args.ts";

const args: ActionArgs = {
  projectId: "use your own",
  callableId: "use your own",
  apiKey: "use your own",
  inputArgs: [{
    "Key": "Value",
  }],
};

Deno.test("agent call test", async () => {
  await rebyte_main({
    context: {},
    args: args,
  });
});
