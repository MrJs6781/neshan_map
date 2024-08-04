"use client";

import {
  Marker,
} from "@neshan-maps-platform/mapbox-gl";
import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react";
import "@neshan-maps-platform/mapbox-gl-react/dist/style.css";

export const AddFixMarkerMap = () => {
  const mapSetterHandler = (map: any) => {
    new Marker({ color: "#B724AE" })
      .setLngLat({ lng: 51.3378, lat: 35.6997 })
      .addTo(map);

    if (window.document.querySelector(".wm-container")) {
      window.document.querySelector(".wm-container")?.remove();
    }

    map.on("move", (e: any) => {
      const center = map.getCenter();
      if (window.document.querySelector(".mapboxgl-marker")) {
        window.document.querySelector(".mapboxgl-marker")?.remove();
      }
      new Marker({ color: "#B724AE" }).setLngLat(center).addTo(map);
      console.log("Latiude : " + center.lat);
      console.log("Longitiude : " + center.lng);
    });
  };

  return (
    <MapComponent
      options={{
        mapKey: "web.2b84e570f3fb49f3bd5c180e3b131ae2",
        mapType: MapTypes.neshanVector,
        center: { lng: 51.338076, lat: 35.699756 },
        zoom: 14,
        mapTypeControllerOptions: { show: false },
      }}
      mapSetter={(map) => mapSetterHandler(map)}
      className="w-full h-full relative min-h-[400px]"
    ></MapComponent>
  );
};
