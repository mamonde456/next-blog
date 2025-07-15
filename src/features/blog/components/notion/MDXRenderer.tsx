import { run, runSync } from "@mdx-js/mdx";
import * as React from "react";
import * as runtime from "react/jsx-runtime";

const mdxRuntime = {
  ...runtime,
  Fragment: React.Fragment,
};
export default function MDXRenderer({
  compiledCode,
}: {
  compiledCode: string;
}) {
  try {
    const { default: MDXContent } = runSync(compiledCode, {
      ...runtime,
      Fragment: React.Fragment,
    });

    if (MDXContent) {
      return <MDXContent />;
    } else return <div>loading...</div>;
  } catch (error) {
    console.error("MDX 실행 에러:", error);
    return <div>Error loading content</div>;
  }
}
