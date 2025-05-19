// 좋아요 기능

import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { firestore } from "../../../../firebase";

export const incrementLikeCount = async (id: string, likeCount: number) => {
  try {
    const likeRef = doc(firestore, "posts", id);
    if (likeCount !== undefined || likeCount !== null) {
      await updateDoc(likeRef, {
        meta: {
          like: likeCount + 1,
        },
      });
    }
  } catch (error) {
    console.log("🚨 incrementLikeCount error: ", error);
    return null;
  }
};
export const decrementLikeCount = async (id: string, likeCount: number) => {
  const likeRef = doc(firestore, "posts", id);
  if (likeCount !== undefined || likeCount !== null) {
    await updateDoc(likeRef, {
      meta: {
        like: likeCount - 1,
      },
    });
  }
};

export const listenToLikeCountChanges = async (id: string) => {
  return new Promise((resolve, reject) => {
    const unsub = onSnapshot(
      doc(firestore, "posts", id),
      { includeMetadataChanges: true },
      (doc) => {
        const likeCount = doc.data()?.meta?.like;

        // onSnapshot의 구독을 취소
        unsub();

        if (likeCount !== undefined) {
          resolve(likeCount);
        } else {
          reject("Like count is undefined");
        }
      }
    );
  });
};
