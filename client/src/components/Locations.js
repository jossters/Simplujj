import React from "react";
import GoogleMapReact from "google-map-react";
import "../App.css";

export default function Location() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Location</h1>
        <div
          className="col text-center"
          style={{ width: "85%", height: "70vh" }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultZoom={17}
            defaultCenter={{
              lat: 34.107041,
              lng: -117.922038,
            }}
            >
            </GoogleMapReact>
          
        </div>
      </header>
    </div>
  );
}
