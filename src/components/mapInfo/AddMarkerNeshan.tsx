"use client";

import { FirstCodeMap } from "@/constants/FirstCodeMap";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { FiCopy } from "react-icons/fi"; // import copy icon
import { toast } from "sonner";
import { AddMarkerCodeMap } from "@/constants/AddMarkerCodeMap";

interface mapPropTypes {}

// نوع بازگشتی مشخص شده است
const DynamicMapBox = dynamic<mapPropTypes>(
  () =>
    import("@/components/Maps/AddMarkerMap").then(
      (mod) => mod.AddMarkerMap as any
    ),
  {
    ssr: false, // disable server-side rendering
  }
);

export const AddMarkerNeshan = () => {
  const [HTMLCode, setHTMLCode] = useState("");
  const [plainCode, setPlainCode] = useState(""); // to store plain code

  const createCode = async () => {
    const code = AddMarkerCodeMap; // input code
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
        در این بخش میخواهیم که مارکر رو به نقشه نشان اضافه کنیم و یک فانکشن
        بنویسیم که هر زمان کاربر روی قسمتی از نقشه کلیک کرد مارکر نقشه به اون
        قسمت منتقل بشه و نمایش داده بشه.
      </h3>
      <p className="text-[20px] font-medium opacity-90">
        در مثال پایین من کدی توسعه دادم که در مرحله اول زمانی که صفحه لود میشه
        مارکر رو در یک قسمت مشخص شده نمایش میده و با هر کلیک کاربر مارکر به همون
        قسمت از نقشه منتقل میشه و خب lat , lng رو هم روی کنسول کاربر لاگ میگیرم
        که اگر در زمینه دیگه ای مورد نیاز بود بتونین ازش استفاده کنین.
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
