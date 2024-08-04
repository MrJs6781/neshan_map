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
import { AddMarkerNeshan } from "./AddMarkerNeshan";
import { FindMeUserNeshan } from "./FindMeUserNeshan";
import { AddFullScreenNeshan } from "./AddFullScreenNeshan";
import { AddFixMarkerNeshan } from "./AddFixMarkerNeshan";

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
              <BreadcrumbPage className="text-[14px] font-vazirB">
                {getPathName.split("/")[2]}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {getPathName.split("/")[2] == "neshan_map" && <MapInfoNeshan />}
      {getPathName.split("/")[2] == "add_marker_neshan_map" && (
        <AddMarkerNeshan />
      )}
      {getPathName.split("/")[2] == "add_find_location_user_neshan_map" && (
        <FindMeUserNeshan />
      )}
      {getPathName.split("/")[2] == "add_full_screen_neshan_map" && (
        <AddFullScreenNeshan />
      )}
      {getPathName.split("/")[2] == "fix_marker_neshan_map" && (
        <AddFixMarkerNeshan />
      )}
    </div>
  );
};
