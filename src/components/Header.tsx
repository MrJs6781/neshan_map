"use client";

import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <div className="w-full flex items-center justify-between shadow-lg h-[60px] p-4 border-b">
      <h5>mrjs.programmer@gmail.com</h5>
      <ModeToggle />
    </div>
  );
};
