import { safeClone } from "../../utils/common";
import path from "path";
import fs from "fs";

export const saveFile = (src: string, slug: string, json: any) => {
  try {
    const outDir = path.join(process.cwd(), src);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const extension = slug.split(".").at(-1);
    if (!extension) return new Error("파일 확장자를 작성하지 않았습니다.");
    if (extension === "js") {
      fs.writeFileSync(path.join(outDir, slug), json);
    } else {
      fs.writeFileSync(path.join(outDir, slug), JSON.stringify(json, null, 2));
    }
    return { message: "success", id: src + slug };
  } catch (error) {
    return { message: "fail: " + error };
  }
};

export const getCacheData = (src: string) => {
  const filePath = path.join(process.cwd(), src);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    if (src.endsWith(".js")) {
      return fileContent;
    }
    return JSON.parse(fileContent);
  }
  return null;
};

export const deletedCacheData = (src: string) => {
  const filePath = path.join(process.cwd(), src);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.rmdirSync(filePath);
    return { message: "success" };
  }
  return null;
};

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
