// tsconfig-paths-bootstrap.js
// import { register } from "tsconfig-paths";
// import { fileURLToPath } from "url";
// import path from "path";
// import { readFileSync } from "fs";
const { fileURLToPath } = require("url");
const { readFileSync } = require("fs");
const { resolve } = require("path");

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.join(path.resolve(), __filename);
// const __dirname = dirname(__filename);

const tsConfig = JSON.parse(
  readFileSync(resolve(__dirname, "./tsconfig.json")).toString()
);

const baseUrl = tsConfig.compilerOptions.baseUrl || ".";

require("tsconfig-paths").register({
  baseUrl,
  paths: tsConfig.compilerOptions.paths,
});
