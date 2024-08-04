"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { FiCopy } from "react-icons/fi"; // import copy icon
import { toast } from "sonner";
import { FineMeUserCodeMap } from "@/constants/FineMeUserCodeMap";

interface mapPropTypes {}

// نوع بازگشتی مشخص شده است
const DynamicMapBox = dynamic<mapPropTypes>(
  () =>
    import("@/components/Maps/FindMeUserMap").then(
      (mod) => mod.FindMeUserMap as any
    ),
  {
    ssr: false, // disable server-side rendering
  }
);

export const FindMeUserNeshan = () => {
  const [HTMLCode, setHTMLCode] = useState("");
  const [plainCode, setPlainCode] = useState(""); // to store plain code

  const createCode = async () => {
    const code = FineMeUserCodeMap; // input code
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
        در این قسمت به اضافه ویژگی افزودن مارکر به صفحه که در قسمت قبلی انجام شد
        یک قابلیت جدید هم به نقشه تحت عنوان پیدا کردن لوکیشن کاربر با دسترسی
        گرفتن از موقعیت مکانی کاربر هندل شده که بسیار مفید و کاربردی میباشد
      </h3>
      <p className="text-[20px] font-medium opacity-90">
        در مثال کد پایین شما هم در نقشه مارکر رو خواهید داشت و هم قابلیت پیدا
        کردن لوکیشن کاربر به نقشه افزوده شده که به محض کلیک بر روی آن ابتدا از
        شما اجازه دسترسی به موقعیت مکانی رو گرفته و سپس به موقعیت کاربر دسترسی
        پیدا میکند و آنرا در صفحه نمایش میدهد.
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
