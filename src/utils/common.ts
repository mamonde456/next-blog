import { FieldValue, Timestamp } from "firebase/firestore";

export const getKoreanTime = () => {
  const now = new Date();
  const koreanTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);

  const year = koreanTime.getUTCFullYear();
  const month = String(koreanTime.getUTCMonth() + 1).padStart(2, "0");
  const date = String(koreanTime.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${date}`;
};
interface ObjectTimestampType {
  nanoseconds: number;
  seconds: number;
}
type TimestampType = Timestamp | ObjectTimestampType;
export const formatTimestampToDateStr = (timestamp: TimestampType | string) => {
  if (!timestamp) return;
  if (typeof timestamp === "string") {
    return timestamp.slice(0, 10);
  }
  if (timestamp instanceof Timestamp) {
    // firestore Timestamp 타입 지원
    const date = timestamp.toDate();
    const dateString = date.toISOString().slice(0, 19).replace("T", " ");
    return dateString;
  }
  if (timestamp instanceof FieldValue) {
    console.log("지원하는 형식이 아닙니다.");
    return "";
  }
  if (timestamp instanceof Object) {
    if (
      timestamp.hasOwnProperty("nanoseconds") &&
      timestamp.hasOwnProperty("seconds")
    ) {
      // Realtime database > Timestamp 타입 지원 x
      const formatTimestamp = new Timestamp(
        timestamp.seconds,
        timestamp.nanoseconds
      );
      const date = formatTimestamp.toDate();
      const dateString = date.toISOString().slice(0, 19).replace("T", " ");
      return dateString;
    }
  }
  console.log("지원하는 형식이 아닙니다.");
  return "";
};

export const safeClone = <T>(data: T) => {
  const hasStructuredClone = typeof globalThis.structuredClone === "function";
  if (hasStructuredClone) {
    return structuredClone(data);
  } else {
    return JSON.parse(JSON.stringify(data));
  }
};

export const successFailureLogRecorder = (
  results: { message: string | null }[] | null
) => {
  try {
    if (!results) {
      throw new Error("데이터를 찾지 못했습니다.");
    }
    for (const result of results) {
      const msg = result.message;
      if (!msg) {
        console.log(
          "error message를 찾지 못했습니다. 지원하지 않는 에러 데이터 구조입니다."
        );
        continue;
      }
      if (msg.startsWith("success")) {
        continue;
      } else if (msg.startsWith("fail")) {
        console.log(msg);
      }
    }
  } catch (error) {
    console.error(error);
    throw new Error("데이터를 찾지 못했습니다.");
  }
};

export const findKeyByValue = (id: string, data: Record<string, any>) => {
  for (const [key, value] of Object.entries(data)) {
    if (value === id) return key;
  }
  return null;
};
