import React from "react";
import GoogleMap from "google-map-react";

import { App } from "../../AppStyles";
import "../../App.css";

import pin from "../../resources/png/placeholder.png";
import burger from "../../resources/png/burger.png";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea } from "@mui/material";

const location = {
  name: "Simplujj",
  lat: 34.13369251549061,
  lng: -117.90750959555727,
};
const LocationPin = () => (
  <div>
    <img className="marker-style pointer" src={pin} alt="pin" />
  </div>
);

export default function Location() {
  const handleClick = () => {
    window.open(
      "https://www.google.com/maps/place/Azusa,+CA/@34.1374687,-117.9299781,14z/data=!3m1!4b1!4m5!3m4!1s0x80c2e94241154be3:0x259a1bf37d2f755b!8m2!3d34.1336186!4d-117.9075627?hl=en&authuser=0"
    );
  };
  return (
    <App>
      <h1>Location</h1>
      <div
        className="col text-center"
        style={{ width: "90vmin", height: "50vh" }}
      >
        <GoogleMap
          bootstrapURLKeys={{ key: "" }}
          defaultZoom={14}
          defaultCenter={{
            lat: location.lat,
            lng: location.lng,
          }}
        >
          <LocationPin lat={location.lat} lng={location.lng} />
        </GoogleMap>
      </div>

      <Card variant="outlined" sx={{ display: "flex", margin: 3 }}>
        <CardActionArea>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <CardContent 
            sx={{
              display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 120,
                }}
                image={burger}
                alt="burger"
              />
            </CardContent>

            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" sx={{ fontSize: 40 }} color="black">
                {location.name}
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: 15 }}>
                Azusa,CA
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: 15 }}>
                1-800-000-000
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                10:30 a.m. - 1:00 a.m.
              </Typography>
              <Button className="pointer" onClick={handleClick}>
                Directions
              </Button>
            </CardContent>
          </CardContent>
        </CardActionArea>
      </Card>
    </App>
  );
}
