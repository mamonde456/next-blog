import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";

export const incrementLikeCount = async (id: string) => {
  const likeRef = doc(firestore, "posts", id);
  const likeCount = (await listenToLikeCountChanges(id)) as number;

  if (likeCount !== undefined || likeCount !== null) {
    await updateDoc(likeRef, {
      meta: {
        like: likeCount + 1,
      },
    });
  }
};
export const decrementLikeCount = async (id: string) => {
  const likeRef = doc(firestore, "posts", id);
  const likeCount = (await listenToLikeCountChanges(id)) as number;

  if (likeCount !== undefined || likeCount !== null) {
    if (likeCount > 0) {
      await updateDoc(likeRef, {
        meta: {
          like: likeCount - 1,
        },
      });
    }
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
