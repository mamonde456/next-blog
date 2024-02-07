import { set, ref, get, child, onValue, remove } from "firebase/database";
import { db } from "../../firebase";
import { IFirebasePost } from "@/types/blog";

export const addPostToBookmark = (
  userId: string,
  config: Omit<IFirebasePost, "update_at" | "content">
) => {
  set(ref(db, `bookmarks/${userId}/${config.id}`), {
    ...config,
  });
};

export const removePostFromBookmark = (userId: string, postId: string) => {
  const firebasePosts = listenToBookmarkChanges(userId);
  const Post = firebasePosts.find((post) => post.id === postId);
  if (Post) {
    remove(ref(db, `bookmarks/${userId}/${postId}`));
  } else {
    return console.log("해당 포스트를 찾을 수 없습니다.");
  }
};

const listenToBookmarkChanges = (userId: string) => {
  console.log(userId);
  let dataArr: IFirebasePost[] = [];
  const bookmarkRef = ref(db, "bookmarks/" + userId);
  onValue(bookmarkRef, (snapshot) => {
    const data = snapshot.val();
    dataArr.push(data);
  });
  return dataArr;
};
