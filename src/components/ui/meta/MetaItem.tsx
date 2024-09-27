import { IFirebasePost } from "@/types/blog";
import { onValue, ref } from "firebase/database";
import { db, firestore } from "../../../../firebase";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import {
  addPostToBookmark,
  removePostFromBookmark,
} from "@/utils/features/bookmark";
import { decrementLikeCount, incrementLikeCount } from "@/utils/features/like";
import styled from "styled-components";
import BookmarkIcon from "../BookmarkIcon";
import LikeIcon from "../LikeIcon";
import useAuth from "@/hook/useAuth";

const MetaContainer = styled.div`
  height: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const MetaContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

interface IMeta {
  item: IFirebasePost;
}

export default function MetaItem({ item }: IMeta) {
  const [likeCount, setLikeCount] = useState(0);
  const [isBookmark, setIsBookmark] = useState(false);
  const isLoggedIn = useAuth();

  useEffect(() => {
    const userInfo = window.sessionStorage.getItem("userInfo");
    const userId = userInfo && JSON.parse(userInfo).uid;
    const bookmarkRef = ref(db, "/bookmarks" + userId + item.id);
    onValue(bookmarkRef, (snapshot) => {
      const data = snapshot.val();
      if (data != null) {
        setIsBookmark(true);
      }
    });
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(firestore, "posts", item.id),
      { includeMetadataChanges: true },
      (doc) => {
        const likeCount = doc.data()?.meta?.like || 0;
        setLikeCount(likeCount);
      }
    );

    return () => unsub();
  }, [item.id]);

  useEffect(() => {
    const userInfo =
      window.sessionStorage.getItem("userInfo") &&
      JSON.parse(window.sessionStorage.getItem("userInfo") || "");
    if (userInfo && isBookmark) {
      setBookmark(userInfo.uid);
    } else {
      if (userInfo) {
        removePostFromBookmark(userInfo.uid, item.id);
      }
    }
  }, [isBookmark]);

  const getLikeState = (state: boolean) => {
    if (state) {
      incrementLikeCount(item.id);
    } else {
      decrementLikeCount(item.id);
    }
  };

  const setBookmark = (userId: string) => {
    const config = {
      id: item.id,
      title: item.title,
      description: item.description,
      created_at: item.created_at,
      userConfig: {
        displayName: item.userConfig.displayName,
        email: item.userConfig.email,
        photoUrl: item.userConfig.photoUrl,
        uid: item.userConfig.uid,
      },
      meta: {
        like: item.meta.like,
      },
    };

    addPostToBookmark(userId, config);
  };

  return (
    <MetaContainer>
      <MetaContent>
        <LikeIcon getLikeState={getLikeState} isLoggedIn={isLoggedIn} />
        <span>{likeCount}</span>
      </MetaContent>
      <MetaContent
        onClick={() => {
          if (!isLoggedIn) return;
          setIsBookmark((prev) => !prev);
        }}
      >
        <BookmarkIcon isLoggedIn={isLoggedIn} />
        <span>북마크</span>
      </MetaContent>
    </MetaContainer>
  );
}
