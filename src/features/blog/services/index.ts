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

export const calculateReadingTime = (content: any) => {
  // 코드 블럭 제거
  const withoutCodeBlocks = content.replace(/```[\s\S]*?```/g, "");
  // 인라인 코드 제거
  const withoutInlineCode = withoutCodeBlocks.replace(/`[^`]+`/g, "");
  // 마크다운 문법 제거 & 이미지 제거
  const withoutMarkdown = withoutInlineCode
    .replace(/[#*_~`\[\]()]/g, "")
    .replace(/!\[.*?\]\(.*?\)/g, "");

  const koreanChars = (withoutMarkdown.match(/[가-힣]/g) || []).length;
  const englishWords = (withoutMarkdown.match(/[a-zA-Z]+/g) || []).length;

  // 한국어: 분당 350자
  // 영어: 분당 225단어
  const koreanMinutes = koreanChars / 350;
  const englishMinutes = englishWords / 225;

  const totalMinutes = Math.ceil(koreanMinutes + englishMinutes);

  return Math.max(1, totalMinutes);
};
