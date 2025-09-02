import { useEffect, useRef, useState } from "react";
import { PropertiesResults } from "../../api/notion/type";

type Props = {
  pageId: string;
};

export function usePageViewTracker({ pageId }: Props) {
  const [views, setViews] = useState(0);
  const hasTracked = useRef(new Set());

  useEffect(() => {
    const trackView = async () => {
      try {
        if (!pageId || hasTracked.current.has(pageId)) return;
        const sessionKey = `viewed_${pageId}`;
        const sessionItem = window.sessionStorage.getItem(sessionKey);
        const page = await (
          await fetch(`/api/notion/${pageId}/getPage`)
        ).json();
        if (!sessionItem) {
          const propertiesId = page.properties["views"].id;

          if (propertiesId) {
            const property = (await (
              await fetch(`/api/notion/${pageId}/updateProperties`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ propertiesId }),
              })
            ).json()) as PropertiesResults;

            const views = property.number;

            if (!views) {
              const response = await (
                await fetch(`/api/notion/${pageId}/updateProperties`, {
                  headers: { "Content-Type": "application/json" },
                  method: "POST",
                  body: JSON.stringify({ views: 1 }),
                })
              ).json();
              const viewsRes = response.properties["views"].number;
              setViews(viewsRes);
              console.log(`trackView: [${pageId}] 조회수 ${viewsRes}`);
            } else {
              const response = await (
                await fetch(`/api/notion/${pageId}/updateProperties`, {
                  headers: { "Content-Type": "application/json" },
                  method: "POST",
                  body: JSON.stringify({ views: views + 1 }),
                })
              ).json();
              const viewsRes = response.properties["views"].number;
              setViews(viewsRes);
              console.log(`trackView: [${pageId}] 조회수 ${viewsRes}`);
            }
          }
          window.sessionStorage.setItem(sessionKey, "true");
          hasTracked.current.add(pageId);

          console.log(`📊 View tracked for: ${pageId}`);
        } else {
          const views = page.properties["views"].number;
          if (views) {
            setViews(views);
          }
        }
      } catch (error) {
        console.error("Failed to track view:", error);
        throw new Error(`${error}`);
      }
    };

    const timer = setTimeout(trackView, 300);

    return () => clearTimeout(timer);
  }, [pageId]);

  return { views };
}
