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

export const getCacheData = (relativePath: string) => {
  try {
    const absolutePath = relativePath.startsWith("/")
      ? path.join(process.cwd(), relativePath)
      : path.join(process.cwd(), relativePath);
    if (!fs.existsSync(absolutePath)) return console.warn("파일 없음.");

    const fileContent = fs.readFileSync(absolutePath, "utf-8");
    if (relativePath.endsWith(".js")) {
      return fileContent;
    }
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`파일 읽기 실패: ${relativePath}`, error);
    throw new Error(`getCacheData 실패: ${relativePath} - ${error}`);
  }
};

export const deletedCacheData = (src: string) => {
  try {
    const extension = src.split(".").at(-1);
    if (!extension) return new Error("파일 확장자를 작성하지 않았습니다.");
    const filePath = path.join(process.cwd(), src);
    if (fs.existsSync(filePath)) {
      const stat = fs.statSync(filePath);

      if (stat) {
        fs.unlinkSync(filePath);
        console.log("파일 삭제 성공");
        return { message: "success", id: src };
      } else {
        fs.rmdirSync(filePath);
        console.log("디렉토리 삭제 성공");
        return { message: "success", id: src };
      }
    }
    return { message: "파일이 존재하지 않습니다.", id: src };
  } catch (error) {
    console.error("deletedCacheData: 파일을 삭제하는 데 실패했습니다.");
    throw new Error(`${error}`);
  }
};

export const updateJSONFile = <T>(
  fullPath: string,
  updater: (data: T) => T
) => {
  try {
    let existingData;
    try {
      existingData = getCacheData(fullPath);
    } catch (error) {
      console.warn("기존 파일 없음, 새로 생성함.");
      existingData = {};
    }

    const updated = updater(safeClone(existingData));
    const slug = fullPath.split("/").at(-1);
    const path = fullPath.substring(0, fullPath.lastIndexOf("/") + 1);
    if (!slug)
      throw new Error("slug 추출 실패: path 경로가 완전하지 않습니다.");

    const result = saveFile(path, slug, updated);
    if (result.message !== "success")
      throw new Error(`[updateJSONFile] 실패: ${fullPath} `);

    console.log("JSON 업데이트 완료");
  } catch (error) {
    console.error(`[updateJSONFile] 실패: ${fullPath} `, error);
    throw error;
  }
};
