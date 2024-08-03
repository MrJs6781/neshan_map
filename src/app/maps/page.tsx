import { Header } from "@/components/Header";
import React from "react";
import mapData from "./../../../maps.json";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { GlareCard } from "@/components/ui/glare-card";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="w-full flex flex-col items-end">
      <Header />
      <div className="w-full flex flex-col items-end gap-4 mt-24 px-6 pb-12">
        <h3 className="text-[15px] font-semibold text-right">
          اینجا قراره که نقشه های مختلف با کد های هربخش داخلش قرار بگیره و خب
          امیدوارم بتونم داکیومنت کاملی تهیه کنم و همگی دوستان بتونن به راحتی
          ازش استفاده کنند
        </h3>
        <ul
          className="w-full flex items-start justify-start gap-4 flex-wrap mt-8"
          style={{ direction: "rtl" }}
        >
          {mapData?.allMaps.map((mapData) => {
            if (mapData.type_card == "3D") {
              return (
                <li key={mapData.id} className="h-[500px]">
                  <CardContainer className="inter-var h-full">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex justify-between flex-col">
                      <div className="w-full flex flex-col items-start">
                        <CardItem
                          translateZ="50"
                          className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                          {mapData.title}
                        </CardItem>
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                          {mapData.description}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                          <Image
                            src={mapData.image}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                          />
                        </CardItem>
                      </div>
                      <div className="flex justify-between items-center pt-12">
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                          <Link href={`/map/${mapData.button_link}`}>
                            {mapData.button_text}
                          </Link>
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </main>
  );
}
