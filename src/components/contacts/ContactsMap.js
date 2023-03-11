import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

function ContactsMap(){
  return (
    <MapContainer center={[46.97144608629644, 31.96943312062055]} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
      />
      <Marker position={[46.97144608629644, 31.96943312062055]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default ContactsMap