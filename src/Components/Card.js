import React from 'react';
import {users} from "../data";
import { useState } from 'react';
import Details from './Details';

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
      <>
    <div>
    {
        users.map((elem,index)=>(
            <div key={index}>
                <h1>{elem.name}</h1>
                <div>
                    <h5>{elem.email}</h5>
                    <h5>{elem.phone}</h5>
                </div>
                <button onClick={()=>clickHandler(elem.id)}>More details</button>
            </div>
        ))

    }
     </div>
     {toggle ? <Details user={details}></Details>:<></>}
   
    </>
  )
}

export default Card;