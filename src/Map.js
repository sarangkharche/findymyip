import { useEffect, useState } from "react";

const Map = ({ lat, lon }) => {
  // Setting up the initial viewport of the map
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 14,
    bearing: 0,
    pitch: 0,
    width: "100%",
    height: "100%",
  });

  // Viewport re-renders whenever latitude
  // and longitude changes
  useEffect(() => {
    const a = { ...viewport };
    a.latitude = lat;
    a.longitude = lon;
    setViewport(a);
  }, [lat, lon, viewport]);

  // return (
  // 	<div className="map">
  // 	<ReactMapGL
  // 		mapboxApiAccessToken={API_KEY}
  // 		{...viewport}
  // 		onViewportChange={(viewport) => setViewport(viewport)}
  // 		mapStyle="mapbox://styles/mapbox/streets-v11">
  // 		<Marker latitude={lat} longitude={lon}>
  // 		<div className="mark">
  // 			<RiUserLocationFill size="25px" color="blue" />
  // 		</div>
  // 		</Marker>
  // 	</ReactMapGL>
  // 	</div>
  // );
};

export default Map;
