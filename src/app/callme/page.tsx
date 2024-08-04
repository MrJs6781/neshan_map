"use client";
import { Header } from "@/components/Header";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { toast } from "sonner";

type dataType = {
  id: number;
  title: string;
  icon: any;
};

const data = [
  {
    id: 1,
    title: "آدرس گیت هاب من : https://github.com/MrJs6781",
    icon: <FaGithub className="text-[24px]" />,
  },
  {
    id: 2,
    title: "آدرس لینکدین من : https://www.linkedin.com/in/abolfazl-javadineya/",
    icon: <FaLinkedin className="text-[24px]" />,
  },
  {
    id: 3,
    title: "آیدی من در تلگرام : https://t.me/mrjs6781",
    icon: <FaTelegram className="text-[24px]" />,
  },
  {
    id: 3,
    title: "آدرس ایمیل من : mr.js.programmer@gmail.com",
    icon: <SiGmail className="text-[24px]" />,
  },
];

export default function page() {
  const copyHandler = (item: dataType) => {
    navigator.clipboard.writeText(item.title);
    toast.success("با موفقیت کپی شد");
  };

  return (
    <main className="w-full flex flex-col items-end min-h-screen">
      <Header />
      <div className="w-full flex flex-col items-end gap-4 mt-24 px-4 pb-12">
        <h5>برای ارتباط با من میتونین از راه های زیر استفاده کنین</h5>
        <ul
          className="flex flex-col items-start gap-6"
          style={{ direction: "rtl" }}
        >
          {data.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => copyHandler(item)}
            >
              {item.icon}
              <h5 className="text-muted-foreground">{item.title}</h5>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
