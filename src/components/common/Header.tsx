import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
  nav {
    height: 100%;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #9ae6ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Header() {
  const router = useRouter();
  const [id, setId] = useState("");
  useEffect(() => {
    setId(uuidv4());
    console.log(uuidv4());
    console.log(router);
  }, []);
  return (
    <Wrapper>
      <nav>
        <h1>
          <Link href={"/"}>BEGIN.log</Link>
        </h1>
        <ProfileBox>
          {router.pathname !== "/write" && (
            <Link href={`/write/${id}`}>글 작성</Link>
          )}
          <ProfileIcon>
            <svg height="1em" viewBox="0 0 448 512">
              <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
            </svg>
          </ProfileIcon>
        </ProfileBox>
      </nav>
      {/* <div>search</div> */}
    </Wrapper>
  );
}
