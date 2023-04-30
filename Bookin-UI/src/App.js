import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Signin from "./components/Authentication/Signin"
import Signup from "./components/Authentication/Signup";
import { Ticket } from "./components/Ticketing/Ticket";
import { PickDestination } from "./components/Reservation/PickDestination/PickDestination";
import { SelectSeat } from "./components/Reservation/SelectSeat/SelelctSeat";
import { Confirm } from "./components/confirm/confirm";


function App() {
  const [busDetails, setBusDetails] = useState("...");
  const handleDepartureLocation = ({ location, destinations }) => {
    setBusDetails({
      locationSelected: location,
      busDestinations: destinations
    });
  };
  return (
    <>
    <Router>
      <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/confirm' element={<Confirm />} />
      <Route path='/seat' element={<SelectSeat />} />
      <Route path='/' element={<Signin />} />
      <Route path='/destination' element={<PickDestination />}/>
      <Route path='/signin' element={<Signin />} />
      <Route path='/ticket' element={<Ticket/>} />
      </Routes>
    </Router>

    </>
  );
}
export default App;





// return (
  
{    /* <SelectSeat /> */}
  {/* <Router>
    <Routes>
        <Route exact path="/" component={Authentication} />
        <Route path="/seat" component={SelectSeat} />
        <Route
          path="/book"
          render={props => (
            <PickTimeAndLocation
              {...props}
              selectedBus={handleDepartureLocation}
            />
          )}
        />
        <Route
          path="/destination"
          render={props => (
            <PickDestination {...props} busDetails={busDetails} />
          )}
        />
        <Route path="/ticket" render={props => <Ticket {...props} />} />
     
    </Routes>
  </Router> */}

// );
// }

