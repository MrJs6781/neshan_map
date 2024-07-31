"use client";

import { toast } from "sonner";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  const copyHandler = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("آدرس ایمیل با موفقیت کپی شد", { duration: 1500 });
  };

  return (
    <div className="w-full flex items-center justify-between shadow-lg h-[60px] p-4 border-b">
      <h5
        className="cursor-pointer"
        onClick={() => copyHandler("mrjs.programmer@gmail.com")}
      >
        mrjs.programmer@gmail.com
      </h5>
      <ModeToggle />
    </div>
  );
};
