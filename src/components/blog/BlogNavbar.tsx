import Link from "next/link";
import styled from "styled-components";

const InfoList = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 30px;
  nav {
    display: flex;
    gap: 10px;
    justify-content: space-around;
    a {
      width: 100%;
      background: #ece6e6;
      padding: 10px;
      border-radius: 10px;
      text-align: center;
    }
  }
`;

const SearchBox = styled.div``;

interface IProps {
  setKeyword: (index: string) => void;
}

export default function BlogNavbar({ setKeyword }: IProps) {
  return (
    <InfoList>
      <h1>Hello, my Blog</h1>
      <nav>
        <Link href={"/"}>게시글</Link>
        <Link href={"saves"}>임시글</Link>
      </nav>
      <SearchBox>
        <input
          type="search"
          onInput={(e) => setKeyword(e.currentTarget.value)}
        />
        <button>검색</button>
      </SearchBox>
    </InfoList>
  );
}
