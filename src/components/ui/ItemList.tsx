import { IFirebasePost } from "@/types/blog";
import Link from "next/link";
import styled from "styled-components";
import MetaItem from "./meta/MetaItem";

const Items = styled.ul`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* background: white; */
  padding: 10px;
`;
const Item = styled.li`
  width: 100%;
  /* background: #ececec; */
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  /* .main_board {
    height: 200px;
  } */
  /* .main_menu {
    height: 100px;
  } */
`;

const Title = styled.div`
  height: 60px;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
`;
const Content = styled.div`
  height: 100px;
  padding: 10px;
`;

export default function ItemList({ itemList }: { itemList: IFirebasePost[] }) {
  return (
    <Items>
      {itemList.map((item: IFirebasePost) => (
        <Item key={item.id}>
          <Link href={"posts/" + item?.id}>
            <Title>{item?.title}</Title>
            <Content>{item?.description}</Content>
          </Link>
          <MetaItem item={item} />
        </Item>
      ))}
    </Items>
  );
}
