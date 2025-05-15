import { getCodeBlocksJson } from "@/features/blog/api/public";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Prism from "prismjs";
import { getSlugMap } from "@/features/blog/services/notion";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { GetStaticProps } from "next";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: red;
`;

export default function CodeSlot(result: any, { index }: any) {
  const [code, setCode] = useState<{ lang: string; code: string }>();

  return <></>;
}

function CodeBlock({ lang, code }: any) {
  console.log(lang, code);
  // const html = useMemo(() => {
  //   return Prism.highlight(
  //     code,
  //     lang ? Prism.languages[lang] : Prism.languages.typescript,
  //     lang ? lang : "typescript"
  //   );
  // }, [lang, code]);

  return (
    <pre className={`language-${lang || "typescript"}`}>
      <code dangerouslySetInnerHTML={{ __html: code }} />
    </pre>
  );
}

const SkeletonWrapper = styled.div`
  /* From Uiverse.io by vk-uiux */
  .card {
    width: 18rem;
    padding: 1rem;
    text-align: center;
    border-radius: 0.8rem;
    background-color: white;
  }

  .card__skeleton {
    background-image: linear-gradient(
      90deg,
      #ccc 0px,
      rgb(229 229 229 / 90%) 40px,
      #ccc 80px
    );
    background-size: 300%;
    background-position: 100% 0;
    border-radius: inherit;
    animation: shimmer 1.5s infinite;
  }

  .card__title {
    height: 15px;
    margin-bottom: 15px;
  }

  .card__description {
    height: 100px;
  }

  @keyframes shimmer {
    to {
      background-position: -100% 0;
    }
  }
`;

function Skeleton() {
  return (
    <SkeletonWrapper>
      <div className="card">
        <div className="card__skeleton card__title"></div>
        <div className="card__skeleton card__description"> </div>
      </div>
    </SkeletonWrapper>
  );
}
