export const toSlug = (title: string) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^ㄱ-ㅎ가-힣a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};
