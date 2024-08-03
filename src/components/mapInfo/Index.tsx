"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { MapInfoNeshan } from "./MapInfoNeshan";

export const MapInfoIndex = () => {
  const getPathName = usePathname();

  //   useEffect(() => {
  //     console.log(getPathName.split("/"));
  //   }, []);

  return (
    <div className="w-[95%] sm:w-[600px] flex flex-col">
      <div
        className="w-full flex items-center justify-center pt-4"
        style={{ direction: "ltr" }}
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <p className="text-[14px] font-vazirB">Home</p>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/maps`}>
                <p className="text-[14px] font-vazirB">Maps</p>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[14px] font-vazirB">{getPathName.split("/")[2]}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {getPathName.split("/")[2] == "neshan_map" && <MapInfoNeshan />}
    </div>
  );
};
