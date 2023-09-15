import {ActionArgs} from "./action_args.ts";

export async function callable_caller(args: ActionArgs) {
  const params = {
    "version": args.version || "latest",
    "config":args.config || {},
    "blocking": args.blocking || false,
    "inputs": args.inputArgs || {}
  }

  const response = await fetch(`http://localhost:3000/api/sdk/p/${args.projectId}/a/${args.callableId}/r`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${args.apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params),
    })

    if (response.ok) {
      const res = await response.json();
      return res;
    } else {
      console.log(`Failed to call callable: ${response.statusText}`);
    }
}