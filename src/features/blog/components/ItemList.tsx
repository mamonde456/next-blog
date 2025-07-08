import Link from "next/link";
import styled from "styled-components";
import { NotionType } from "../api/notion/type";
import { toSlug } from "../../../utils/slugify";

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

export default function ItemList({ itemList }: { itemList: NotionType[] }) {
  return (
    <Items>
      {itemList?.map((item: NotionType) => (
        <Item key={item.id}>
          <Link
            href={
              "/posts/" + toSlug(item?.properties?.이름?.title[0]?.plain_text)
            }
          >
            <span>{item?.icon?.emoji}</span>
            <span>
              {item?.properties?.이름
                ? item?.properties?.이름?.title[0]?.plain_text
                : "제목없음"}
            </span>
            <span>{item?.created_time}</span>
            <span>{item?.last_edited_time}</span>
          </Link>
        </Item>
      ))}
    </Items>
  );
}
