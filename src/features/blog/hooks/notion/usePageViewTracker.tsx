// page id를 받고 페이지 프로퍼티 가져오기
// 페이지 캐시 meta data에 값이 있다면 캐시 데이터를 우선으로 가져오기
// 5초마다 요청 필요
//

import { useEffect, useRef } from "react";
import {
  getNotionPage,
  retrievePagePropertyItem,
  updatePageProperties,
} from "../../api/notion";
import { NotionPage, NotionProperties } from "../../api/notion/type";

type Props = {
  pageId: string;
};

export function usePageViewTracker({ pageId }: Props) {
  const hasTracked = useRef(new Set());

  useEffect(() => {
    const trackView = async () => {
      try {
        if (!pageId || !hasTracked.current.has(pageId)) return;
        const sessionKey = `viewed_${pageId}`;
        const sessionItem = window.sessionStorage.getItem(sessionKey);
        if (!sessionItem) {
          // 조회수 1 증가
          const page = (await getNotionPage(pageId)) as NotionPage;
          const propertiesId = page.properties["views"].id;
          if (propertiesId) {
            const results = (await retrievePagePropertyItem(
              pageId,
              propertiesId
            )) as NotionProperties;
            if (results && "results" in results) {
              // response가 올바른 형태일 때만 처리
              const item = results.results.find(
                (item) => item.id === propertiesId
              );
            }
          }
          await updatePageProperties(pageId, { viewd: 1 });

          window.sessionStorage.setItem(sessionKey, "true");
          hasTracked.current.add(pageId);

          console.log(`📊 View tracked for: ${pageId}`);
        }
      } catch (error) {
        console.error("Failed to track view:", error);
        throw new Error(`${error}`);
      }
    };

    const timer = setTimeout(trackView, 1000);

    return () => clearTimeout(timer);
  }, [pageId]);
}
