import { LatLngTuple } from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
  Polyline,
} from "react-leaflet";
import { Separator } from "./ui/separator";
import { useState } from "react";
import cities from '@/data/cities'
import legend from "@/data/sample-data-legend";

const markers = [
  {
    position: "pandeglang",
    geocode: [-6.3812797, 105.8331219],
    branch: "mpu",
    popUp: "PT MPU",
  },
  {
    position: "garut",
    geocode: [-7.4002731, 107.5841782],
    branch: "ksm",
    popUp: "PT KSM",
  },
  {
    position: "banyuwangi",
    geocode: [-8.2257446, 114.2251921],
    branch: "lan",
    popUp: "PT LAN",
  },
];

const Maps = () => {
  const [currentActiveMarker, setCurrentActiveMarker] = useState("");
  // const [currentLegend, setCLegend] = useState(Legend.semuaAP);

  const positionClass = "leaflet-top leaflet-left";

  const getCoordinatesByBranch = (branch: string) => {
    switch (branch) {
      case "lan":
        return cities.banyuwangi;
      case "ksm":
        return cities.garut;
      case "mpu":
        return cities.pandeglang;
      default:
        return "";
    }
  };

  const average = legend[currentActiveMarker]?.average
  const total = legend[currentActiveMarker]?.total
  const percentile100 = legend[currentActiveMarker]?.percentile100
  const percentile89 = legend[currentActiveMarker]?.percentile89
  const percentile69 = legend[currentActiveMarker]?.percentile69


  const MinimapControl = () => {
    return (
      <div className={positionClass}>
        <div className="leaflet-control leaflet-bar">
          <div className="bg-white w-[220px] h-[80px] gap-2 px-2 flex flex-col justify-center items-center text-center">
            <p>Rata - Rata Layanan PPL Semua Unit</p>
            <Separator />
            <div className="flex justify-center items-center">
              <p className="text-2xl text-[#0B7F8E]">{ average }</p>
            </div>
          </div>
        </div>
        <div className="leaflet-control leaflet-bar">
          <div className="bg-white w-[220px] h-[80px] gap-2 px-2 flex flex-col justify-center items-center text-center">
            <p>Total AP</p>
            <Separator />
            <div className="flex justify-center items-center">
              <p className=" text-2xl text-[#0B7F8E]">{ total } AP</p>
            </div>
          </div>
        </div>
        <div className="leaflet-control leaflet-bar">
          <div className="bg-white w-[220px] h-[80px] gap-2 px-2 flex flex-col justify-center items-center text-center">
            <p>Pelayanan PPL 90% - 100%</p>
            <Separator />
            <div className="flex justify-center items-center">
              <p className=" text-2xl text-[#00B039]">{ percentile100 } AP</p>
            </div>
          </div>
        </div>
        <div className="leaflet-control leaflet-bar">
          <div className="bg-white w-[220px] h-[80px] gap-2 px-2 flex flex-col justify-center items-center text-center">
            <p>Pelayanan PPL 70% - 89%</p>
            <Separator />
            <div className="flex justify-center items-center">
              <p className=" text-2xl text-[#FA6533]">{ percentile89 }</p>
            </div>
          </div>
        </div>
        <div className="leaflet-control leaflet-bar">
          <div className="bg-white w-[220px] h-[80px] gap-2 px-2 flex flex-col justify-center items-center text-center">
            <p>Pelayanan PPL &lt; 69%</p>
            <Separator />
            <div className="flex justify-center items-center">
              <p className=" text-2xl text-[]">{ percentile69 }</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const currentCoordinates = getCoordinatesByBranch(currentActiveMarker);

  return (
    <>
      <div id="map">
        <MapContainer
          center={[-7.3097646, 110.1143471]}
          zoom={7}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker) => (
            <Marker
              key={marker.branch}
              position={marker.geocode as LatLngTuple}
              eventHandlers={{
                click: (e) => {
                  console.log("marker clicked", e);
                  setCurrentActiveMarker(marker.branch);
                },
              }}
            >
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
          <MinimapControl />
          {currentActiveMarker &&
            currentCoordinates &&
            currentCoordinates.map((polygonGroup, index) =>
              polygonGroup.map((polygon, polygonIndex) => (
                <Polyline
                  key={`${index}-${polygonIndex}`}
                  positions={polygon.map(([lng, lat]) => [lat, lng])}
                  color="red"
                />
              ))
            )}
          <ZoomControl position="topright" />
        </MapContainer>
      </div>
    </>
  );
};

export default Maps;
