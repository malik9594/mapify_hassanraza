import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Home = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [73.0479, 33.6844],
      zoom: 4,
    });

    // Add city markers
    const cities = [
      { name: "Islamabad", coordinates: [73.0479, 33.6844] },
      { name: "New York", coordinates: [-74.006, 40.7128] },
    ];

    cities.forEach((city) => {
      // Add marker

      new maplibregl.Marker()
        .setLngLat(city.coordinates)
        .addTo(map);

      // Add city name as a popup
      new maplibregl.Popup({ offset: 25 })
        .setLngLat(city.coordinates)
        .setText(city.name)
        .addTo(map);
    });

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};


export default Home;