import * as esbuild from "https://deno.land/x/esbuild@v0.17.19/mod.js";
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.8.1/mod.ts";

await esbuild.build({
  plugins: [...denoPlugins({ loader: "native", nodeModulesDir: true })],
  entryPoints: ["./demo.ts"],
  outfile: "./dist/demo.js",
  bundle: true,
  format: "esm",
});
esbuild.stop();
