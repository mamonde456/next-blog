export const findKeyByValue = (slugMap: Record<string, string>, id: string) => {
  const entry = Object.entries(slugMap).find(([key, value]) => value === id);
  const key = entry ? entry[0] : null;
  return key;
};
