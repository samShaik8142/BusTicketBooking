import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PickDestination.css'

export  function PickDestination() {
const navigate= useNavigate();

  const [search, setSearch] = useState({ from: '', to: '', date: '' });
  function updateValue (e)  {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
 
  function searchForBuses(){
    if(search.from != "" && search.to !="" && search.date!="")
    navigate('/seat');
    else
    alert("enter from and to location with dates");
  }

  return (
    <div className="search-container">
      <h2> Search Buses</h2>
      
      <div class="form-group">
        <label>
          From:
          <input required type="text" name="from" onChange={updateValue} />
        </label>
      </div>

      <div class="form-group">
        <label>
          To:
          <input required type="text" name="to" onChange={updateValue} />
        </label>
      </div>

      <div class="form-group">
        <label>
          Date:
          <input required type="date" name="date" onChange={updateValue} />
        </label>
      </div>
      <button onClick={searchForBuses}> Search </button>
    </div>
  );
};