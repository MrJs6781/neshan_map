"use client";

import { FirstCodeMap } from "@/constants/FirstCodeMap";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { FiCopy } from "react-icons/fi"; // import copy icon
import { toast } from "sonner";

interface mapPropTypes {}

// نوع بازگشتی مشخص شده است
const DynamicMapBox = dynamic<mapPropTypes>(
  () => import("@/components/Maps/FirstMap").then((mod) => mod.FirstMap as any),
  {
    ssr: false, // disable server-side rendering
  }
);

export const MapInfoNeshan = () => {
  const [HTMLCode, setHTMLCode] = useState("");
  const [plainCode, setPlainCode] = useState(""); // to store plain code

  const createCode = async () => {
    const code = FirstCodeMap; // input code
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
        اولین حالت نقشه نشان که صرفا نمایش دهنده نقشه است و قابلیتی به آن افزوده
        نشده است
      </h3>
      <p className="text-[20px] font-medium opacity-90">
        این مثال صرفا جهت نمایش مدل نقشه است که تنها چیزی که در داکیومنت خود
        نقشه نشان هم موجود هست همین مثال بوده و در داکیومنت خود نقشه مثال دیگه
        ای از نقشه پیدا نمیکنیم و خب من خاستم این بخش رو هم به قسمت نقشه ها
        اضافه کنیم
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
