/**
 *
 * @param dateTime 캐시 데이터가 저장된(업로드) 시각
 * @param ttl 옵션 / 시간 단위 (hour) / default: 12시간
 * @returns true: 만료 / false: 유효 / boolean 타입
 */

export const isExpired = (dateTime: string | Date, ttl?: number) => {
  let TTL_TIME = 12 * 60;
  if (ttl) TTL_TIME = ttl * 60;
  const ttlMilliseconds = TTL_TIME * 60 * 1000;

  if (dateTime) {
    const createAt = new Date(dateTime);
    const expireAt = new Date(createAt.getTime() + ttlMilliseconds);
    const now = new Date();

    return now >= expireAt;
  }
  return false;
};
