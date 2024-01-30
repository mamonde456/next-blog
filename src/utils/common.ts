export const getKoreanTime = () => {
  const now = new Date();
  now.setHours(now.getHours() + 9);
  return now.toISOString();
};
