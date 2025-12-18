import { run, runSync } from "@mdx-js/mdx";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import * as runtime from "react/jsx-runtime";
import { NotionPage } from "../../api/notion/type";

const components = {
  img: ({ src, alt, ...props }: any) => (
    <Image
      src={src}
      alt={alt || ""}
      width={800}
      height={400}
      sizes="(max-width: 768px) 100vw, 80vw"
      style={{ width: "100%", height: "auto" }}
      loading="lazy"
      {...props}
    />
  ),
  Image: ({ src, alt, ...props }: any) => (
    <Image
      src={src}
      alt={alt || ""}
      width={800}
      height={400}
      sizes="(max-width: 768px) 100vw, 80vw"
      style={{ width: "100%", height: "auto" }}
      loading="lazy"
      {...props}
    />
  ),
};

type PropsType = { compiledCode: string };
export default function MDXRenderer({ compiledCode }: PropsType) {
  const [MDXContent, setMDXContent] = useState<React.ReactElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setLoading(true);
    setError(null);
    const renderMDX = async () => {
      try {
        const result = await run(compiledCode, {
          ...runtime,
          Fragment: React.Fragment,
        });

        if (!result || typeof result.default !== "function") {
          throw new Error("지원하지 않는 MDX 데이터입니다.");
        }

        const MDXComponent = result.default;
        const renderedContent = React.createElement(MDXComponent, {
          components,
        });
        setMDXContent(renderedContent);
      } catch (error) {
        console.error("MDX 실행 에러:", error);
        setError("Error loading contents");
      } finally {
        setLoading(false);
      }
    };
    if (compiledCode) renderMDX();
  }, [compiledCode]);

  if (loading) return <div>...loading</div>;

  if (error) return <div>{error}</div>;

  if (MDXContent) {
    return MDXContent;
  }

  return <div>No content available</div>;
}
