import { ActionArgs } from "./action_args.ts";
import * as jose from 'https://deno.land/x/jose@v4.15.3/index.ts'

// const server = "https://rebyte.ai";
const server = "https://colingo.ai";

export async function agent_caller(args: ActionArgs, context: any) {
  const params = {
    "version": args.version || "latest",
    "config": args.config || {},
    // "blocking": args.blocking || false,
    "blocking": true,
    "inputs": args.inputArgs || [],
  };

  const response = await fetch(
    `${server}/api/sdk/p/${args.projectId}/a/${args.callableId}/r`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${args.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    },
  );

  if (response.ok) {
    const res = await response.json();
    return res;
  } else {
    console.log(`Failed to call callable: ${response.statusText}`);
  }
}
