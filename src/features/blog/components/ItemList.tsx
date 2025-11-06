import Link from "next/link";
import styled from "styled-components";
import { NotionType } from "../api/notion/type";
import { toSlug } from "../../../utils/slugify";
import { formatTimestampToDateStr } from "@/utils/common";

const Items = styled.ul`
  /* width: 100%; */
  min-height: 300px;
  display: flex;
  flex: 5;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;
const Item = styled.li`
  width: 100%;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
`;

const Title = styled.div`
  padding: 5px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  gap: 10px;
`;

const Date = styled.span`
  font-size: 10px;
  padding: 5px;
  opacity: 0.6;
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
            <Date>{formatTimestampToDateStr(item?.created_time)}</Date>
            <Title>
              <span>{item?.icon?.emoji}</span>
              <span>
                {item?.properties?.이름
                  ? item?.properties?.이름?.title[0]?.plain_text
                  : "제목없음"}
              </span>
            </Title>
          </Link>
        </Item>
      ))}
    </Items>
  );
}
