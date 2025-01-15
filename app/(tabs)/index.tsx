import {
  MapView,
  VectorSource,
  LineLayer,
  Camera,
} from "@maplibre/maplibre-react-native";

export default function HomeScreen() {
  return (
    <MapView style={{ flex: 1 }} zoomEnabled compassEnabled>
      <Camera centerCoordinate={[-125, 54.5]} zoomLevel={3.5} />
      <VectorSource
        id="fireCentreSource"
        url="pmtiles://https://nrs.objectstore.gov.bc.ca/lwzrin/psu/pmtiles/fireCentres.pmtiles"
      >
        <LineLayer
          id="border-fire-centres"
          sourceLayerID="tippecanoe_input"
          style={{ lineColor: "red" }}
        />
      </VectorSource>
    </MapView>
  );
}
