import React, { useEffect, useState } from "react";
// import { PickTimeAndLocation } from "./PickTimeAndLocation/PickTimeAndLocation";
import PickTimeAndLocation from './PickDestination/PickDestination';
import { PickDestination } from "./PickDestination/PickDestination";

export const Reservation = () => {
  const [destinations, setDestinations] = useState([]);
  const [location, setLocation] = useState([]);

  const handleSelectedBus = ({ destinations }) => {
    setDestinations(destinations);
  };
  const handleSelectedLocation = location => {
    setLocation(location);
  };
  return (
    <div>
      <PickTimeAndLocation
        selectedBus={handleSelectedBus}
        selectedLocation={handleSelectedLocation}
      />
      <PickDestination
        busDestinations={destinations}
        locationSelected={location}
      />
    </div>
  );
};