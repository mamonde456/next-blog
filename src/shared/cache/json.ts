import { getCacheData, saveFile } from "../../features/blog/services/notion";
import { safeClone } from "../../utils/common";

export const updateJSONFile = <T>(
  fullPath: string,
  updater: (data: T) => T
) => {
  try {
    const data = getCacheData(fullPath);
    const updated = updater(safeClone(data));
    const slug = fullPath.split("/").at(-1);
    const path = fullPath.substring(0, fullPath.lastIndexOf("/") + 1);
    if (!slug)
      throw new Error("slug 추출 실패: path 경로가 완전하지 않습니다.");
    const result = saveFile(path, slug, updated);
    if (result.message !== "success")
      throw new Error(`[updateJSONFile] 실패: ${fullPath} `);
  } catch (error) {
    console.error(`[updateJSONFile] 실패: ${fullPath} `, error);
    throw error;
  }
};
