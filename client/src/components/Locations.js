import React from "react";
import GoogleMap from "google-map-react";
import "../App.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Location() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Location</h1>
        <div
          className="col text-center"
          style={{ width: "85%", height: "70vh" }}
        >
          <GoogleMap
            bootstrapURLKeys={{ key: "" }}
            defaultZoom={17}
            defaultCenter={{
              lat: 34.107041,
              lng: -117.922038,
            }}
            >
              <AnyReactComponent
            lat={34.107041}
            lng={-117.922038}
            text="🍔"
          />
            </GoogleMap>
          
        </div>
      </header>
    </div>
  );
}
