import type { OnResolveArgs, PluginBuild } from "esbuild-wasm";

export const unpkgPathPlugin = () => {
  return {
    name: "unpkg-path-plugin",
    setup(build: PluginBuild) {
      //* Handle root entry file of 'index.js'
      build.onResolve({ filter: /(^index\.js$)/ }, () => {
        return { path: "index.js", namespace: "a" };
      });

      //* Handle relative paths in a module
      build.onResolve({ filter: /\.+\// }, (args: OnResolveArgs) => {
        return {
          path: new URL(args.path, `https://unpkg.com${args.resolveDir}/`).href,
          namespace: "a",
        };
      });

      //* Handle main file of a module
      build.onResolve({ filter: /.*/ }, (args: OnResolveArgs) => {
        return {
          path: `https://unpkg.com/${args.path}`,
          namespace: "a",
        };
      });
    },
  };
};
