// page id를 받고 페이지 프로퍼티 가져오기
// 페이지 캐시 meta data에 값이 있다면 캐시 데이터를 우선으로 가져오기
// 5초마다 요청 필요
//

import { useEffect, useRef } from "react";
import {
  retrievePagePropertyItem,
  updatePageProperties,
} from "../../api/notion";
import { PropertiesResults } from "../../api/notion/type";

type Props = {
  pageId: string;
};

export function usePageViewTracker({ pageId }: Props) {
  const hasTracked = useRef(new Set());

  useEffect(() => {
    const trackView = async () => {
      try {
        if (!pageId || hasTracked.current.has(pageId)) return;
        const sessionKey = `viewed_${pageId}`;
        const sessionItem = window.sessionStorage.getItem(sessionKey);
        if (!sessionItem) {
          // 조회수 1 증가
          const page = await (
            await fetch(`/api/notion/${pageId}/getPage`)
          ).json();
          // const page = (await getNotionPage(pageId)) as NotionPage;
          const propertiesId = page.properties["views"].id;

          if (propertiesId) {
            // api 프록시로 우회 필요
            const property = (await retrievePagePropertyItem(
              pageId,
              propertiesId
            )) as PropertiesResults;

            const views = property.number;
            console.log(views);
            if (!views) {
              await updatePageProperties(pageId, { views: 1 });
            } else {
              await updatePageProperties(pageId, { views: views + 1 });
            }
          }
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

  return null;
}
