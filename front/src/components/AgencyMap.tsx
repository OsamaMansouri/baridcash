import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin } from "lucide-react";
import { Agency } from "@/data/agencies";

interface AgencyMapProps {
  agencies: Agency[];
}

// Mapbox public token
const MAPBOX_PUBLIC_TOKEN =
  "pk.eyJ1Ijoib3NhbWFtYW5zb3VyaSIsImEiOiJjbWNqZHliaGYwM2ExMnJxeGF1Z2ZkcjlkIn0.0vu_Y-IHT7sLGmw5U1Mxag";

const AgencyMap: React.FC<AgencyMapProps> = ({ agencies }) => {
  const { t } = useTranslation("common");
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const currentPopup = useRef<mapboxgl.Popup | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = MAPBOX_PUBLIC_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center:
        agencies.length > 0
          ? [agencies[0].longitude, agencies[0].latitude]
          : [-6.5, 32.2],
      zoom: agencies.length > 1 ? 10 : 14,
      scrollZoom: true,
      boxZoom: true,
      dragRotate: false,
      dragPan: true,
      keyboard: true,
      doubleClickZoom: true,
      touchZoomRotate: true,
      transformRequest: (url) => {
        if (url.startsWith("mapbox://")) {
          return {
            url: url + (url.includes("?") ? "&" : "?") + "worldview=MA",
          };
        }
      },
    });

    // Hide only disputed/claims layers while keeping normal country borders
    map.current.on("style.load", () => {
      if (!map.current) return;

      // A) Hide disputed/claims layers (the dashed/internal line sources)
      [
        "admin-0-boundary-disputed",
        "admin-0-boundary-disputed-bold",
        "admin-0-boundary-disputed-bg",
        "admin-0-boundary-claims",
        "admin-0-boundary-claims-bg",
      ].forEach((id) => {
        if (map.current!.getLayer(id)) {
          map.current!.setLayoutProperty(id, "visibility", "none");
        }
      });

      // B) Kill the white halo that creates the faint line
      //    (This keeps borders, just removes the white casing/glow.)
      ["admin-0-boundary-bg", "admin-1-boundary-bg"].forEach((id) => {
        if (map.current!.getLayer(id)) {
          map.current!.setLayoutProperty(id, "visibility", "none");
        }
      });

      // C) Ensure regular borders stay visible (no dashed internals)
      ["admin-0-boundary", "admin-1-boundary"].forEach((id) => {
        if (map.current!.getLayer(id)) {
          map.current!.setLayoutProperty(id, "visibility", "visible");
        }
      });

      // D) Remove "Western Sahara" label explicitly (in case the style still shows it)
      //    Filter country labels to exclude EH / Western Sahara names.
      const hideWesternSaharaFilter = [
        "all",
        ["!=", ["get", "name"], "Western Sahara"],
        ["!=", ["get", "name_en"], "Western Sahara"],
        ["!=", ["get", "name_fr"], "Sahara occidental"],
        ["!=", ["get", "name_ar"], "الصحراء الغربية"],
        // Many styles include iso code; exclude EH if present.
        ["!=", ["get", "iso_3166_1"], "EH"],
      ];

      // Common label layers in streets-v12:
      [
        "country-label",
        "country-label-lg",
        "country-label-md",
        "country-label-sm",
      ].forEach((id) => {
        if (map.current!.getLayer(id)) {
          map.current!.setFilter(id, hideWesternSaharaFilter);
        }
      });
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add markers for each agency
    agencies.forEach((agency) => {
      if (!map.current) return;

      // Create custom marker element with the new icon
      const markerEl = document.createElement("div");
      markerEl.className = "custom-marker";
      markerEl.innerHTML = `
        <div style="
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          background: white;
          padding: 4px;
        ">
          <img src="/lovable-uploads/95811b13-c27d-4e80-87f6-387b919dd778.png" alt="Agency marker" style="width: 32px; height: 32px; object-fit: contain;" />
        </div>
      `;

      // Create popup content with fixed width and proper containment
      const popupContent = `
        <div style="width: 280px; padding: 16px; box-sizing: border-box;">
          <h3 style="font-weight: bold; font-size: 18px; color: #111827; margin: 0 0 8px 0; line-height: 1.4;">${
            agency.agence
          }</h3>
          <p style="font-size: 14px; color: #6b7280; margin: 0 0 12px 0; line-height: 1.5; word-wrap: break-word;">${
            agency.adresse
          }</p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                         ${
                           agency.narsa
                             ? '<span style="display: inline-block; padding: 6px 12px; background-color: #f97316; color: white; font-size: 12px; font-weight: 500; border-radius: 20px; white-space: nowrap;">' +
                               t("serviceNames.narsa") +
                               "</span>"
                             : ""
                         }
             ${
               agency.cnss
                 ? '<span style="display: inline-block; padding: 6px 12px; background-color: #f97316; color: white; font-size: 12px; font-weight: 500; border-radius: 20px; white-space: nowrap;">' +
                   t("serviceNames.cnss") +
                   "</span>"
                 : ""
             }
             ${
               agency.amana
                 ? '<span style="display: inline-block; padding: 6px 12px; background-color: #f97316; color: white; font-size: 12px; font-weight: 500; border-radius: 20px; white-space: nowrap;">' +
                   t("serviceNames.amana") +
                   "</span>"
                 : ""
             }
            ${
              agency.change
                ? '<span style="display: inline-block; padding: 6px 12px; background-color: #f97316; color: white; font-size: 12px; font-weight: 500; border-radius: 20px; white-space: nowrap;">' +
                  t("serviceNames.change") +
                  "</span>"
                : ""
            }
            ${
              agency.baridESign
                ? '<span style="display: inline-block; padding: 6px 12px; background-color: #f97316; color: white; font-size: 12px; font-weight: 500; border-radius: 20px; white-space: nowrap;">' +
                  t("serviceNames.baridESign") +
                  "</span>"
                : ""
            }
          </div>
        </div>
      `;

      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: true,
        closeOnClick: false,
        className: "custom-popup",
        maxWidth: "320px",
      }).setHTML(popupContent);

      // Add click event to marker to handle single popup opening
      markerEl.addEventListener("click", () => {
        // Close the current popup if it exists
        if (currentPopup.current) {
          currentPopup.current.remove();
        }

        // Open the new popup
        popup.addTo(map.current!);
        popup.setLngLat([agency.longitude, agency.latitude]);

        // Store reference to current popup
        currentPopup.current = popup;

        // Listen for popup close event to reset the reference
        popup.on("close", () => {
          currentPopup.current = null;
        });
      });

      new mapboxgl.Marker(markerEl)
        .setLngLat([agency.longitude, agency.latitude])
        .addTo(map.current);
    });

    // Add custom CSS for popup styling
    const style = document.createElement("style");
    style.textContent = `
      .custom-popup .mapboxgl-popup-close-button {
        font-size: 20px !important;
        width: 30px !important;
        height: 30px !important;
        line-height: 26px !important;
        border-radius: 50% !important;
        background-color: #f3f4f6 !important;
        color: #374151 !important;
        font-weight: bold !important;
        right: 8px !important;
        top: 8px !important;
      }
      .custom-popup .mapboxgl-popup-close-button:hover {
        background-color: #e5e7eb !important;
        color: #111827 !important;
      }
      .custom-popup .mapboxgl-popup-content {
        border-radius: 12px !important;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
        padding: 0 !important;
        width: auto !important;
        max-width: 320px !important;
      }
      .custom-popup .mapboxgl-popup-tip {
        border-top-color: white !important;
      }
    `;
    document.head.appendChild(style);

    // Auto-zoom to fit all markers
    if (agencies.length > 1) {
      const bounds = new mapboxgl.LngLatBounds();
      agencies.forEach((agency) => {
        bounds.extend([agency.longitude, agency.latitude]);
      });
      map.current.fitBounds(bounds, { padding: 50 });
    }

    // Cleanup
    return () => {
      if (currentPopup.current) {
        currentPopup.current.remove();
      }
      map.current?.remove();
      // Remove the style element when component unmounts
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [agencies]);

  return (
    <div className="w-full h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden relative">
      {agencies.length > 0 ? (
        <div ref={mapContainer} className="h-full w-full" />
      ) : (
        <div className="h-full w-full flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-500">
            <MapPin className="h-10 w-10 mx-auto text-barid-orange mb-2" />
            <p>Aucune agence trouvée</p>
            <p className="text-sm">
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgencyMap;
