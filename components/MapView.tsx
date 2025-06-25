import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function MapView({ places }: any) {
  return (
    <MapContainer center={[40.7, -74]} zoom={10} className="h-[500px] w-full mb-4">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {places.map((place: any, index: number) => (
        <Marker
          key={index}
          position={[parseFloat(place.lat), parseFloat(place.lng)]}
        >
          <Popup>
            <strong>{place.name}</strong>
            <br />
            {place.address}<br />
            {place.city} {place.ZIP}<br />
            {place.type}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
