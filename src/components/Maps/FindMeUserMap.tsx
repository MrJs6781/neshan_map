"use client";

import { Marker, GeolocateControl } from "@neshan-maps-platform/mapbox-gl";
import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react";
import "@neshan-maps-platform/mapbox-gl-react/dist/style.css";

export const FindMeUserMap = () => {
  const mapSetterHandler = (map: any) => {
    new Marker({ color: "#B724AE" })
      .setLngLat({ lng: 51.3378, lat: 35.6997 })
      .addTo(map);
    map.addControl(
      new GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
        showUserLocation: true,
        showAccuracyCircle: false,
      })
    );

    if (window.document.querySelector(".wm-container")) {
      window.document.querySelector(".wm-container")?.remove();
    }

    map.on("click", (e: { lngLat: { lat: number; lng: number } }) => {
      if (typeof window !== "undefined") {
        if (window.document.querySelector(".mapboxgl-marker")) {
          window.document.querySelector(".mapboxgl-marker")?.remove();
        }

        const getParentMapCanvas = document.querySelector(
          ".mapboxgl-canvas-container"
        ) as HTMLElement;

        if (getParentMapCanvas) {
          const findMe1 = getParentMapCanvas.querySelector(
            ".mapboxgl-user-location-accuracy-circle"
          );
          const findMe2 = getParentMapCanvas.querySelector(
            ".mapboxgl-user-location-dot"
          );
          if (findMe1) {
            getParentMapCanvas.removeChild(findMe1);
          }
          if (findMe2) {
            getParentMapCanvas.removeChild(findMe2);
          }
        }

        new Marker({ color: "#B724AE" }).setLngLat(e.lngLat).addTo(map);
        console.log("Latiude : " + e.lngLat.lat);
        console.log("Longitiude : " + e.lngLat.lng);
      }
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
