import MainMenu from "@/shared/components/MainMenu";
import BasicButton from "@/components/ui/button/BasicButton";
import DeleteButton from "@/components/ui/button/DeleteButton";
import { IIndexedDB } from "@/types/blog";
import {
  getAllDraftsFromFirebase,
  getDraftFromIndexDB,
  removeAllDraftsFromFirebase,
  removeAllDraftsFromIndexedDB,
  removeDraftByIdFromFirebase,
  removeDraftByIdFromIndexedDB,
  setDraftToIndexedDB,
} from "@/utils/\bblog";
import { formatTimestampToDateStr } from "@/utils/common";
import { Timestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

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

const SideMenuList = styled.div`
  flex: 2;
  width: 300px;
  height: 100%;
  /* background: yellow; */
`;

const Search = styled.div`
  width: 100%;
  padding: 10px;
  height: 10%;
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  svg {
    position: absolute;
    left: 1rem;
    fill: #9e9ea7;
    width: 1rem;
    height: 1rem;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: 0.3s ease;
  &::placeholder {
    color: #9e9ea7;
  }
  &:focus,
  &:hover {
    outline: none;
    border-color: rgba(76, 84, 234, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(76 84 234 / 10%);
  }
`;
const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Title = styled.h1`
  padding: 10px;
`;
const RemoveBtn = styled.div`
  padding: 10px;
`;

const SaveBox = styled.div`
  /* width: 100%; */
  flex: 4;
  /* display: flex; */
  /* gap: 10px; */
  padding: 10px;
  position: relative;
`;
const PostList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
const BoxList = styled.div`
  display: flex;
  align-items: center;
`;
const Box = styled.div`
  flex: 4;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  text-align: center;
  overflow: hidden;
  border: solid 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;
export default function Saves({ drafts }: { drafts: IIndexedDB[] }) {
  const [draftList, setDraftList] = useState<IIndexedDB[]>([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const clientDrafts = (await getDraftFromIndexDB()) as IIndexedDB[];
      if (clientDrafts && clientDrafts?.length > 0) {
        setDraftList(clientDrafts);
      } else {
        if (drafts && drafts.length > 0) {
          setDraftList(drafts);
          drafts.map((draft) => setDraftToIndexedDB(draft));
        }
      }
    })();
  }, [drafts]);

  const handleRemoveAll = async () => {
    if (draftList.length <= 0) return;
    const clientRes = await removeAllDraftsFromIndexedDB();
    const serverRes = await removeAllDraftsFromFirebase();
    if (clientRes && serverRes) {
      setDraftList([]);
      alert("모든 임시글이 삭제되었습니다.");
    } else {
      alert("임시글 삭제에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleRemoveById = async (id: string) => {
    if (draftList.length <= 0) return;
    const clientRes = await removeDraftByIdFromIndexedDB(id);
    if (clientRes) {
      setDraftList(draftList.filter((draft) => draft.id !== id));
    } else {
      alert("삭제에 실패했습니다. 다시 시도해주세요.");
    }
  };
  return (
    <Wrapper>
      <MainMenu />
      <SaveBox>
        <HeaderBox>
          <Title>임시글 리스트</Title>
          <RemoveBtn>
            <BasicButton type="button" onClick={handleRemoveAll}>
              모든 임시글 삭제
            </BasicButton>
          </RemoveBtn>
        </HeaderBox>
        {draftList.length > 0 ? (
          <PostList>
            {draftList?.map((el) => {
              return (
                <BoxList key={el.id}>
                  <Box
                    onClick={() =>
                      router.push({
                        pathname: `/write/${el.id}`,
                        query: { action: "draft" },
                      })
                    }
                  >
                    <span>{el?.title}</span>
                  </Box>
                  <DeleteButton onClick={() => handleRemoveById(el.id)} />
                </BoxList>
              );
            })}
          </PostList>
        ) : (
          <div style={{ padding: 15 }}>임시글을 찾을 수 없습니다.</div>
        )}
      </SaveBox>
      <SideMenuList>
        {" "}
        <Search>
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <Input placeholder="Search" type="search" className="input" />
        </Search>
      </SideMenuList>
    </Wrapper>
  );
}

export const getStaticProps = async () => {
  const drafts = await getAllDraftsFromFirebase();
  if (!drafts) return { props: {} };
  const formatDrafts = drafts.map((draft) => {
    const createdAt =
      draft.createdAt instanceof Timestamp
        ? formatTimestampToDateStr(draft.createdAt)
        : "";
    const updateAt =
      draft.updateAt instanceof Timestamp
        ? formatTimestampToDateStr(draft.updateAt)
        : "";

    return {
      ...draft,
      createdAt,
      updateAt,
    };
  });
  return { props: { drafts: formatDrafts } };
};
