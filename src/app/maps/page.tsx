import { Header } from "@/components/Header";
import React from "react";

export default function page() {
  return (
    <main className="w-full flex flex-col items-end">
      <Header />
      <div className="w-full flex flex-col items-end gap-4 mt-24 px-4 pb-12">
        <h3>
          اینجا قراره که نقشه های مختلف با کد های هربخش داخلش قرار بگیره و خب
          امیدوارم بتونم داکیومنت کاملی تهیه کنم و همگی دوستان بتونن به راحتی
          ازش استفاده کنند
        </h3>
      </div>
    </main>
  );
}
