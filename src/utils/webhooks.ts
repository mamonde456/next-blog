export const findKeyByValue = (slugMap: Record<string, string>, id: string) => {
  if (!slugMap) return null;
  const entry = Object.entries(slugMap).find(([key, value]) => value === id);
  const key = entry ? entry[0] : null;
  return key;
};

export const parseEnvJson = <T>(envVar: string | undefined) => {
  if (!envVar) return null;
  try {
    return JSON.parse(envVar) as T;
  } catch (error) {
    console.error(
      `parseEnvJson: 데이터 파싱에 실패했습니다. ${envVar} error: ${error}`
    );
    throw new Error(`${error}`);
  }
};

export const removeHyphens = (str: string) => {
  if (!str) return null;
  return str.replace(/-/g, "");
};
