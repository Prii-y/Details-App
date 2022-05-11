import React from 'react';
import {users} from "../data";
import { useState } from 'react';
import Details from './Details';
import "./card.css";

const Card = () => {
    const [toggle,toggleHandler]=useState(false);
    const[details,setDetails]=useState(users);

    const clickHandler=(id)=>{
    toggleHandler(true);
       let filtered= users.filter((elem)=>{
              return  elem.id===id;
        });
        setDetails(filtered);
    }
  return (
      <div className='cont'>
    <div className='one'>
    {
        users.map((elem,index)=>(
            <div key={index} className='tile'>
                <h1>{elem.name}</h1>
                <div>
                    <h5>Email: {elem.email}</h5>
                    <h5>Phone: {elem.phone}</h5>
                </div>
                <button onClick={()=>clickHandler(elem.id)}>More details</button>
            </div>
        ))

    }
     </div>
     <div className='two'>
     {toggle ? <Details user={details} ></Details>:<></>}
     </div>
    
   
    </div>
  )
}

export default Card;