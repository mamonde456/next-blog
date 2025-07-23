// register-paths.cjs
const { resolve } = require("path");

// ESM 환경에서 바로 적용할 수 있는 경로 매핑 설정
require("module-alias").addAliases({
  "@": resolve(__dirname, "src"),
});
