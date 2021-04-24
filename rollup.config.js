import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import autoNamedExports from "rollup-plugin-auto-named-exports";
import postcss from "rollup-plugin-postcss";
import svg from "rollup-plugin-svg";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      terser(),
      svg(),
      commonjs(),
      autoNamedExports(),
    ],
  },
];
