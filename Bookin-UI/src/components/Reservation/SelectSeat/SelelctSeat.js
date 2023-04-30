import React, { useState } from "react";
import { Confirm } from "../../confirm/confirm";
import { Link, useNavigate } from 'react-router-dom';
import './SelectSeat.css'

export const SelectSeat = props => {
  let navigate=useNavigate();
  const [seats, setSeats] = useState([
     {seatNo0 : "available"},
     {seatNo1 : "available"},
     {seatNo2 : "available"},
     {seatNo3 : "available"},
     {seatNo4 : "available"},
     {seatNo5 : "available"},
     {seatNo6 : "available"},
     {seatNo7 : "available"},
     {seatNo8 : "available"},
     {seatNo9 : "available"},
     {seatNo10 : "available"}
     

  ]);

  const [isClicked, setIsClicked]=useState({
    seatNo0 : true,
    seatNo2 : true,
    seatNo3 : true,
    seatNo4 : true,
    seatNo5 : true,
    seatNo6 : true,
    seatNo7 : true,
    seatNo8 : true,
    seatNo9: true,
    seatNo10 : true,
    seatNo1 : true
  })
  const [data, setdata] = useState(null);
  const [count, setCount]=useState({
    count:0
  })


  console.log(seats);
  function handleSeatSelect(event){
    const id=event.target.id;
    let value=event.target.value;
    if(isClicked[id]){
    setSeats([...seats, seats[value][id]= "unavailable"])
    isClicked[id]=false;
    }else{
    setSeats([...seats, seats[value][id]= "available"])
   isClicked[id]=true;
    }
  }
  let total=0;
  function handleSubmit() {
    console.log("submiting");
    
    for(let i=0;i<11;i++){
      if(isClicked["seatNo"+i]=== false){
        total++;
      }
    }
    setdata(total);
    count.count=total;
    console.log(count);
    navigate('/confirm');
  }
  return (
    <div className="select-seat">
     
      <div className="bus">
        


        <div className="first-row">
          <div className="seat">
            <button  className={seats[0].seatNo0==="available"? "seat-dormant":"selected-seat"} id="seatNo0" value={0} onClick={handleSeatSelect} ></button>
            <button  className={seats[1].seatNo1==="available"? "seat-dormant":"selected-seat"} id="seatNo1" value={1} onClick={handleSeatSelect}></button>
            <button  className={seats[2].seatNo2==="available"? "seat-dormant":"selected-seat"} id="seatNo2" value={2} onClick={handleSeatSelect}></button>
           </div>
        </div>
        
        <div className="second-row">
          <div className="seat">
            <button  className={seats[3].seatNo3==="available"? "seat-dormant":"selected-seat"} id="seatNo3" value={3} onClick={handleSeatSelect} ></button>
            <button  className={seats[4].seatNo4==="available"? "seat-dormant":"selected-seat"} id="seatNo4" value={4} onClick={handleSeatSelect}></button>
            <button  className={seats[5].seatNo5==="available"? "seat-dormant":"selected-seat"} id="seatNo5" value={5} onClick={handleSeatSelect}></button>
            <button  className={seats[6].seatNo6==="available"? "seat-dormant":"selected-seat"} id="seatNo6" value={6} onClick={handleSeatSelect}></button>       
          </div>
        </div>

        

<div className="third-row">
          <div className="seat">
            <button  className={seats[7].seatNo7==="available"? "seat-dormant":"selected-seat"} id="seatNo7" value={7} onClick={handleSeatSelect} ></button>
            <button  className={seats[8].seatNo8==="available"? "seat-dormant":"selected-seat"} id="seatNo8" value={8} onClick={handleSeatSelect}></button>
            <button  className={seats[9].seatNo9==="available"? "seat-dormant":"selected-seat"} id="seatNo9" value={9} onClick={handleSeatSelect}></button>
            <button  className={seats[10].seatNo10==="available"? "seat-dormant":"selected-seat"} id="seatNo10" value={10}  onClick={handleSeatSelect}></button>
          </div>
        </div>
        
      </div>
      <div className="tags">
        <p style={{ backgroundColor: "#454545" }}>Reserved</p>
        <p style={{ backgroundColor: "#46a530" }}>Empty</p>
        <p style={{ backgroundColor: "rgb(231, 47, 47)" }}>Taken</p>
      </div>

      <div className="proceed-button-container">
      <button className="proceed-button" onClick={handleSubmit}>Get Ticket</button>
      </div>
    </div>
  );
};