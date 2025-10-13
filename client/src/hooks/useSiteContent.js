import { useEffect, useState } from "react";

const STATIC_FALLBACK = typeof window !== "undefined" ? window.__SITE_CONTENT__ ?? null : null;

export const useSiteContent = () => {
  const [content, setContent] = useState(STATIC_FALLBACK);
  const [status, setStatus] = useState(STATIC_FALLBACK ? "loaded" : "idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (STATIC_FALLBACK) {
      return;
    }

    let active = true;
    const controller = new AbortController();

    const load = async () => {
      setStatus("loading");
      try {
        // Try API first (dev server)
        let response = await fetch("/api/content", { signal: controller.signal });
        if (!response.ok) {
          // Fallback to static JSON for static hosting
          response = await fetch("/content.json", { signal: controller.signal });
        }
        if (!response.ok) {
          throw new Error(`Failed to load content (${response.status})`);
        }
        const data = await response.json();
        if (active) {
          setContent(data);
          setStatus("loaded");
        }
      } catch (err) {
        if (err.name === "AbortError") {
          return;
        }
        console.error(err);
        setError(err);
        setStatus("error");
      }
    };

    load();

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  return {
    content,
    loading: status === "loading" || status === "idle",
    error,
  };
};
