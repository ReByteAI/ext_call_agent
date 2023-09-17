import { assertEquals } from "https://deno.land/std@0.201.0/assert/mod.ts";
import { rebyte_main } from "./main.ts";
import { ActionArgs } from "./action_args.ts";

const args: ActionArgs = {
  projectId: "f11742ed4a26f5cbefe1",
  callableId: "eb25ed8fbd3bdad30227",
  apiKey: "sk-f591f6cca6cdffe2043c7e1e1257afeb",
  inputArgs: [{
    "Key": "Value",
  }],
};

Deno.test("url test", async () => {
  await rebyte_main({
    context: {},
    args: args,
  });
});
