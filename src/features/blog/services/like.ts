import {
  decrementLikeCount,
  incrementLikeCount,
  listenToLikeCountChanges,
} from "../api/like";

export const toggleLikePost = async (id: string) => {
  let isLike = false;
  const likeCount = ((await listenToLikeCountChanges(id)) as number) && 0;

  if (isLike) {
    decrementLikeCount(id, likeCount);
    isLike = false;
  } else {
    incrementLikeCount(id, likeCount);
    isLike = true;
  }
};
