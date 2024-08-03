"use client";

import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react";

export const FirstMap = () => {
  return (
    <MapComponent
      options={{
        mapKey: "web.2b84e570f3fb49f3bd5c180e3b131ae2",
        mapType: MapTypes.neshanVector,
        center: { lng: 51.338076, lat: 35.699756 },
        zoom: 14,
        mapTypeControllerOptions: { show: false },
      }}
      className="w-full h-full max-h-[400px] relative min-h-[400px]"
    ></MapComponent>
  );
};
