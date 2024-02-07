export const getKoreanTime = () => {
  const now = new Date();
  const koreanTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);

  const year = koreanTime.getUTCFullYear();
  const month = String(koreanTime.getUTCMonth() + 1).padStart(2, "0");
  const date = String(koreanTime.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${date}`;
};
