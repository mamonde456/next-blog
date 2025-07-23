import { IFirebasePost, IMeta } from "../../../types/blog.ts";
import { DocumentData, QuerySnapshot } from "firebase/firestore";

export const decodeFirestorePosts = (
  querySnapshot: QuerySnapshot<DocumentData, DocumentData>
) => {
  const posts: IFirebasePost[] = [];
  querySnapshot.forEach((doc) => {
    const title = doc.data().title;
    const content = doc.data().content;
    doc.data().title = decodeURIComponent(title);
    doc.data().content = decodeURIComponent(content);
    posts.push(doc.data() as IFirebasePost);
  });
  return posts;
};

export const decodeFirestorePost = (firebaseData: DocumentData) => {
  const meta: IMeta = {
    id: firebaseData.id,
    title: firebaseData.title,
    description: firebaseData.description,
    created_at: firebaseData.created_at,
    userConfig: firebaseData.userConfig,
  };
  const decodedText = decodeURIComponent(firebaseData.content);
  return { meta, content: decodedText };
};
