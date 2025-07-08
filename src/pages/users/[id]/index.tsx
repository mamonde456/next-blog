import { auth } from "../../../../firebase";
import { useState } from "react";
import styled from "styled-components";
import "react-image-crop/dist/ReactCrop.css";
import MainMenu from "../../../shared/components/MainMenu";
import Link from "next/link";
import { useRouter } from "next/router";
import ItemList from "../../../features/blog/components/ItemList";
import { NotionType } from "../../../features/blog/api/notion/type";

const Wrapper = styled.div`
  /* display: flex;
  height: 100%;
  justify-content: center;
  align-items: center; */
  width: 100%;
  height: 98%;
  display: flex;
  background: white;
  margin-top: 0.8%;
  border-radius: 10px;
`;
const ContentContainer = styled.div`
  flex: 4;
`;
const ProfileContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ffe395;
  padding: 10px;
  /* padding-top: 100px; */
  /* margin-top: 100px; */
  position: relative;
  /* top: 100px;  */
  display: flex;
  gap: 20px;
`;
const ProfileImg = styled.div<{ src: string }>`
  width: 170px;
  height: 170px;
  background-color: white;
  background-image: ${(props) =>
    `url("${props.src ? props.src : "/blank-profile.svg"}")`};
  /* background-image: url("/blank-profile.svg"); */
  background-size: cover;
  background-position: center;
  /* border-radius: 100%; */
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  /* top: -80px; */
  border: solid 1px black;
`;
const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #3f3f3f;
  :first-child {
    font-size: 32px;
    font-family: Cinzel;
    color: black;
  }
  :nth-child(2) {
    margin-bottom: 20px;
  }
`;

const LinkButton = styled(Link)`
  font-family: monospace;
  background-color: #f3f7fe;
  color: #3b82f6;
  border: none;
  border-radius: 8px;
  width: 100px;
  height: 45px;
  transition: 0.3s;
  text-align: center;
  line-height: 45px;
  position: absolute;
  right: 20px;

  &:hover {
    background-color: #3b82f6;
    box-shadow: 0 0 0 5px #3b83f65f;
    color: #fff;
  }
`;

export default function UserProfile() {
  const user = auth.currentUser;
  const [postList, setPostList] = useState<NotionType[]>([]);
  const {
    query: { id },
  } = useRouter();

  // useEffect(() => {
  //   handleQuery();
  // }, [id]);

  // const handleQuery = async () => {
  //   const posts = await getAllPostsFromFirebase();
  //   if (posts) {
  //     setPostList([...posts]);
  //   }
  // };

  return (
    <Wrapper>
      <MainMenu />
      <ContentContainer>
        <ProfileContainer>
          <LinkButton href={`${id}/setting-profile`}>정보 수정</LinkButton>
          <ProfileImg src={user?.photoURL || ""}></ProfileImg>
          <ProfileContent>
            <span>{user?.displayName}</span>
            <span>@{user?.email?.split("@")[0]}</span>
          </ProfileContent>
        </ProfileContainer>
        <ItemList itemList={postList}></ItemList>
      </ContentContainer>
    </Wrapper>
  );
}
