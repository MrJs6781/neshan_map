"use client";

import { toast } from "sonner";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const listHeader = [
  { id: 1, title: "صفحه اصلی", link: "/" },
  { id: 2, title: "نقشه ها", link: "/maps" },
  // { id: 3, title: "درباره من", link: "/aboutme" },
  { id: 4, title: "تماس با من", link: "/callme" },
];

export const Header = () => {
  const copyHandler = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("آدرس ایمیل با موفقیت کپی شد", { duration: 1500 });
  };

  return (
    <div className="w-full flex items-center justify-between shadow-lg h-[60px] p-4 border-b fixed top-0 z-20 bg-white dark:bg-black">
      <ModeToggle />
      <ul
        className="flex items-center justify-center gap-4"
        style={{ direction: "rtl" }}
      >
        {listHeader.map((item) => (
          <Link key={item.id} href={item.link}>
            <p>{item.title}</p>
          </Link>
        ))}
      </ul>
      <span className="sm:flex hidden">
        <h5>MRJs</h5>
      </span>

    </div>
  );
};
