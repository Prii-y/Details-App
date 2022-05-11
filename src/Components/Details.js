import React from 'react'

const Details = (props) => {
    const {user}=props;
  return (
    <div>
    {
    user.map((elem,index)=>(
        <div className='details'>
        <h1>{elem.name}</h1>
    <div>
    <h5>Email: {elem.email}</h5>
    <h5>Phone: {elem.phone}</h5>
    <h5>City: {elem.city}</h5>
    <h5>State: {elem.state}</h5>
    <h5>Country: {elem.country}</h5>
    <h5>Organisation: {elem.organisation}</h5>
    <h5>Job profile: {elem["job profile"]}</h5>
    <h5> Additional info: {elem["additional info"]}</h5>
        </div>
   </div>
    ))
    }
    </div>
  )
}

export default Details