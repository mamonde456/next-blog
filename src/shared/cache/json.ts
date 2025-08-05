import { getCacheData, saveFile } from "../../features/blog/services/notion";
import { safeClone } from "../../utils/common";

export const updateJSONFile = <T>(path: string, updater: (data: T) => T) => {
  try {
    const data = getCacheData(path);
    const updated = updater(safeClone(data));
    const slug = path.split("/").at(-1);
    if (!slug)
      return new Error("slug 추출 실패: path 경로가 완전하지 않습니다.");
    return saveFile(path, slug, updated);
  } catch (error) {
    console.error(`[updateJSONFile] 실패: ${path} `, error);
    return { message: "error", error };
  }
};
