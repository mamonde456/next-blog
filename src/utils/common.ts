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
export const formatTimestampToDateStr = (timestamp: TimestampType | null) => {
  if (!timestamp) return;
  if (timestamp instanceof Timestamp) {
    // firestore Timestamp 타입 지원
    const date = timestamp.toDate();
    const dateString = date.toISOString().slice(0, 19).replace("T", " ");
    return dateString;
  } else if (timestamp instanceof FieldValue) {
    console.log("지원하는 형식이 아닙니다.");
    return "";
  } else if (timestamp instanceof Object) {
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
  } else {
    console.log("지원하는 형식이 아닙니다.");
    return "";
  }
};

export const safeClone = <T>(data: T) => {
  const hasStructuredClone = typeof globalThis.structuredClone === "function";
  if (hasStructuredClone) {
    return structuredClone(data);
  } else {
    return JSON.parse(JSON.stringify(data));
  }
};
