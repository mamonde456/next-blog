import { run, runSync } from "@mdx-js/mdx";
import Image from "next/image";
import * as React from "react";
import * as runtime from "react/jsx-runtime";

const components = {
  img: ({ src, alt, ...props }: any) => (
    <Image
      src={src}
      alt={alt || ""}
      width={800}
      height={400}
      priority
      sizes="(max-width: 768px) 100vw, 80vw"
      style={{ width: "100%", height: "auto" }}
      {...props}
    />
  ),
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
      return <MDXContent components={components} />;
    } else return <div>loading...</div>;
  } catch (error) {
    console.error("MDX 실행 에러:", error);
    return <div>Error loading content</div>;
  }
}
