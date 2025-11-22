import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import { FeatureCollection, Feature, Geometry } from 'geojson';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';

// Tipos para as propriedades do GeoJSON
interface StateProperties {
  name: string;
  sigla: string;
  regiao: string;
}

interface BrazilCoverageMapProps {
  className?: string;
}

// Componente para ajustar automaticamente os bounds do mapa ao GeoJSON
function FitBoundsOnLoad({ geoData }: { geoData: FeatureCollection | null }) {
  const map = useMap();

  useEffect(() => {
    if (geoData && geoData.features.length > 0) {
      // Criar uma camada temporária para calcular os bounds
      const geoJsonLayer = L.geoJSON(geoData as any);
      const bounds = geoJsonLayer.getBounds();
      
      // Ajustar o mapa aos bounds com padding responsivo
      const width = window.innerWidth;
      const padding: L.FitBoundsOptions = {
        padding: width < 768 ? [20, 20] : width < 1024 ? [40, 40] : [60, 60],
        maxZoom: width < 768 ? 4 : 4.5,
        animate: true,
        duration: 1
      };
      
      map.fitBounds(bounds, padding);
    }
  }, [map, geoData]);

  return null;
}

export default function BrazilCoverageMap({ className = '' }: BrazilCoverageMapProps) {
  const [geoData, setGeoData] = useState<FeatureCollection | null>(null);
  const [loading, setLoading] = useState(true);

  // Carregar GeoJSON
  useEffect(() => {
    fetch('/data/brazil-states.geojson')
      .then(response => response.json())
      .then(data => {
        setGeoData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao carregar GeoJSON:', error);
        setLoading(false);
      });
  }, []);

  // Estilo dos estados - Azul escuro profissional
  const stateStyle = {
    fillColor: '#1E40AF', // Azul escuro profissional (blue-800)
    fillOpacity: 0.85,
    color: '#3B82F6', // Azul médio para a borda (blue-500)
    weight: 2.5,
  };

  // Estilo ao passar o mouse
  const highlightStyle = {
    fillOpacity: 0.95,
    weight: 3.5,
  };

  // Função para cada feature (estado) - Apenas hover visual, sem tooltip
  const onEachState = (feature: Feature<Geometry, StateProperties>, layer: L.Layer) => {
    if (layer instanceof L.Path) {
      // Eventos de hover - apenas mudança visual
      layer.on({
        mouseover: (e) => {
          const target = e.target;
          target.setStyle(highlightStyle);
          target.bringToFront();
        },
        mouseout: (e) => {
          const target = e.target;
          target.setStyle(stateStyle);
        },
      });
    }
  };

  if (loading) {
    return (
      <div className={`glass-medium elevation-2 rounded-3xl border-2 border-white/10 p-6 md:p-8 lg:p-10 ${className}`}>
        <div className="flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white/70 font-medium">Carregando mapa...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 md:space-y-8 ${className}`}>
      {/* Mapa Container */}
      <div className="glass-medium elevation-2 hover:elevation-3 rounded-3xl border-2 border-white/10 hover:border-cyan-500/30 overflow-hidden transition-all duration-500 group">
        <div className="h-[400px] md:h-[500px] lg:h-[600px] relative">
          <MapContainer
            center={[-14.235, -51.9253]}
            zoom={4}
            scrollWheelZoom={false}
            className="h-full w-full"
            zoomControl={true}
            attributionControl={true}
            // Desabilitar controles de legenda
            // @ts-ignore
            layersControl={false}
            // @ts-ignore
            legend={false}
          >
            <FitBoundsOnLoad geoData={geoData} />
            
            {/* TileLayer - Mapa base */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://techdio.netlify.app">TECHDIO</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              opacity={0.3}
            />
            
            {/* GeoJSON Layer - Estados brasileiros */}
            {geoData && (
              <GeoJSON
                data={geoData}
                style={stateStyle}
                onEachFeature={onEachState}
              />
            )}
          </MapContainer>

          {/* Legenda removida conforme solicitado */}
        </div>
      </div>
    </div>
  );
}