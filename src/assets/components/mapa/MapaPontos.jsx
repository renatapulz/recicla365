import { useContext, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { CollectionPointContext } from "../../../hooks/CollectionPointContext.jsx"
import './Mapa.css'
import 'leaflet/dist/leaflet.css';

// Atualiza o map se tiver a localização do usuário.
function SetMapView() {
  const map = useMap();

// Pede para pegar a localização do usuário.
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = (pos) => {
    const coords = pos.coords;

// Centraliza o map na localização do usuário.
    map.setView([coords.latitude, coords.longitude], 12);
  }

  const errors = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          }
          else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          }
        });
    } else {
      console.log("Geolocalização não suportada.");
    }
  });
  return null
}

function MapaPontos() {
  const mapCenter = [-15.81244132217256, -48.67172998908291];
  const { pontoColeta, getCollectionPoints } = useContext(CollectionPointContext)

  useEffect(() => {
    getCollectionPoints();
  }, []);

  return (
    <MapContainer center={mapCenter} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Array.isArray(pontoColeta) && pontoColeta.length > 0 && pontoColeta.map(ponto => <Marker position={[ponto.latitude, ponto.longitude]} key={ponto.id}>
          <Popup>
            <h2>{ponto.nomeLocal}</h2>
            <p>{ponto.descricao}</p>
            <p>{ponto.logradouro}, {ponto.numero}</p>
            <p>Resíduos aceitos: {ponto.tiposResiduos.join(', ')}</p>
          </Popup>
        </Marker>
      )}
      <SetMapView />
    </MapContainer>
  )
}

export default MapaPontos;
