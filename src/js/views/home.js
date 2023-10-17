import React, { useState,useContext } from "react";
import "../../styles/home.css"; 
import { Card } from "../component/card";
import { Context } from "../store/appContext";
export const Home = () => {
const {store,actions}=useContext(Context)
  return (
    <div className="container">
      <h1>Character</h1>
	  <div className="row  flex-nowrap overflow-x-scroll overflow-y-hidden">
	  {store.characters.map((character,index)=>{ 
		return(
			<div className="characters col" key={index} >
			<Card item={character}category="characters"idx={index}/>   
		 </div>
		)
	  })}
	  </div>

    

      <h1>Planets</h1>
	  <div className=" row flex-nowrap overflow-x-scroll  overflow-y-hidden">
      {store.planets.map((planet,index)=>{ 
		return(
			<div className="planets col"  key={index}>
			<Card item={planet}category="planets"idx={index}/>   
		 </div>
		)
	  })}
	  </div>
	  <h1>Planets</h1>
	  <div className="row  flex-nowrap overflow-x-scroll overflow-y-hidden">
      {store.starships.map((starship,index)=>{ 
		return(
			<div className="starships col "  key={index}>
			<Card item={starship}category="starships"idx={index}/>   
		 </div>
		)
	  })}
	  </div>
    </div>

  );

};
