import Header from "@/components/common/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import styled from "styled-components";

const AllWarpper = styled.div<{ $window: { width: number; height: number } }>`
  width: ${($props) =>
    $props.$window.width >= 1200 ? 1200 + "px" : 100 + "%"};
  height: ${($props) => $props.$window.height + "px"};
  margin: 0 auto;
`;

export default function App({ Component, pageProps }: AppProps) {
  const [resize, setResize] = useState({
    width: 1200,
    height: 100,
  });
  useEffect(() => {
    setResize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => {
      setResize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <AllWarpper $window={{ width: resize.width, height: resize.height }}>
      {/* <Header></Header> */}
      <Component {...pageProps} />
    </AllWarpper>
  );
}
