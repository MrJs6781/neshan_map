"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { FiCopy } from "react-icons/fi"; // import copy icon
import { toast } from "sonner";
import { AddFullScreenCodeMap } from "@/constants/AddFullScreenCodeMap";
import { AddFixMarkerCodeMap } from "@/constants/AddFixMarkerCodeMap";

interface mapPropTypes {}

// نوع بازگشتی مشخص شده است
const DynamicMapBox = dynamic<mapPropTypes>(
  () =>
    import("@/components/Maps/AddFixMarkerMap").then(
      (mod) => mod.AddFixMarkerMap as any
    ),
  {
    ssr: false, // disable server-side rendering
  }
);

export const AddFixMarkerNeshan = () => {
  const [HTMLCode, setHTMLCode] = useState("");
  const [plainCode, setPlainCode] = useState(""); // to store plain code

  const createCode = async () => {
    const code = AddFixMarkerCodeMap; // input code
    const html = await codeToHtml(code, {
      lang: "javascript",
      theme: "night-owl",
    });
    setHTMLCode(html);
    setPlainCode(code); // store plain code
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(plainCode);
      toast.success("کد با موفقیت کپی شد", { duration: 1500 });
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    createCode();
  }, []);

  return (
    <div className="w-full flex flex-col items-start gap-4 pt-12 overflow-hidden pb-12">
      <h3 className="text-[22px] font-vazirB">
        در این قسمت قصد داریم که مارکر رو در مرکز نقشه ثابت قرار بدیم و با
        تغییرات کاربر مارکر در مرکز نقشه باقی بماند و هر زمان که مارکر جا به جا
        شد مختصات نقطه جدید برای ما در کنسول به نمایش در بیاید
      </h3>
      <p className="text-[20px] font-medium opacity-90">
        در مثال پایین ما مارکر رو برای نقشه ثابت میکنیم که دقیقا کاری مشابه با
        اسنپ فود هست که خب به نظرم قابلیت جالبی برای نقشه هست
      </p>
      <DynamicMapBox />
      <div className="relative w-full">
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded z-30"
          title="کپی کردن کد"
        >
          <FiCopy size={20} />
        </button>
        <div
          dangerouslySetInnerHTML={{ __html: HTMLCode }}
          className="shiki vitesse-dark w-full relative"
          style={{
            backgroundColor: "#121212",
            color: "#dbd7caee",
            direction: "ltr",
          }}
        ></div>
      </div>
    </div>
  );
};
