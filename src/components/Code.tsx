import { useEffect } from "react";
import { codeToHtml } from "shiki";
import type { BundledLanguage, BundledTheme } from "shiki"; // Import the types from shiki // [!code highlight]

type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
};

export default function Code({
  code,
  lang = "javascript",
  theme = "andromeeda",
}: Props) {
  const createCode = async () => {
    const html = await codeToHtml(code, {
      lang,
      theme,
    });
    return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
  };

  useEffect(() => {
    createCode();
  }, []);
}
