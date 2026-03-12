import { useEffect } from "react";

const FontLoader = () => {
  useEffect(() => {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href =
      "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap";

    document.head.appendChild(l);

    document.body.style.cssText =
      "margin:0;padding:0;background:#F7F8FC;font-family:'DM Sans',sans-serif;";
  }, []);

  return null;
};

export default FontLoader;