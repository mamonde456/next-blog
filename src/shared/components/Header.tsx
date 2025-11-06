import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import useAuth from "../../features/auth/hook/useAuth";
import { Category, CategoryId } from "./types/header";

const Wrapper = styled.header`
  height: 80px;
  border-bottom: solid 1px rgba(55, 53, 47, 0.3);
  flex-direction: column;
  */ nav {
    height: 100%;
  }
`;

const List = styled.div`
  top: 30px;
  position: relative;
  display: flex;
  align-items: end;
  flex-wrap: wrap;
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: #eee;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  font-size: 14px;
  .radio {
    flex: 1 1 auto;
    text-align: center;
  }

  .radio input {
    display: none;
  }

  .radio .name {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem 0;
    color: rgba(51, 65, 85, 1);
    transition: all 0.15s ease-in-out;
  }

  .radio input:checked + .name {
    background-color: #fff;
    font-weight: 600;
  }
`;
const Li = styled.li`
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  align-items: end;
  box-sizing: border-box;
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

const CATEGORIES: Category[] = [
  { id: "all", label: "전체", emoji: "🔖" },
  { id: "tech", label: "기술 공부", emoji: "💻" },
  { id: "retrospect", label: "회고", emoji: "📝" },
  { id: "daily", label: "일상", emoji: "☕" },
];

type Props = {
  selected: CategoryId;
  setSelected: Dispatch<SetStateAction<CategoryId>>;
};

export default function Header({ selected, setSelected }: Props) {
  const isLoggedIn = useAuth();

  const router = useRouter();
  const [id, setId] = useState("");
  const [profileDropBox, setprofileDropBox] = useState(false);
  useEffect(() => {
    const newId = uuidv4();
    if (id !== newId) setId(newId);
    else return;
  }, [router]);

  return (
    <Wrapper>
      <nav>
        <List>
          {CATEGORIES.map((item) => (
            <label className="radio" key={item.id}>
              <input
                type="radio"
                name="category"
                checked={selected === item.id}
                onChange={() => {
                  setSelected(item.id as CategoryId);
                }}
              />
              <span className="name">{item.label}</span>
            </label>
          ))}
        </List>
      </nav>
    </Wrapper>
  );
}
