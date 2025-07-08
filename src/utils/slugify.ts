export const toSlug = (title: string) => {
  if (!title) return "제목없음";
  return title
    .toLowerCase()
    .trim()
    .replace(/[^ㄱ-ㅎ가-힣a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};
