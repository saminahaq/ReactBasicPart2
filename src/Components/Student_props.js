import React from 'react';

function Student_props(props) {
    console.log(props.name)
    return (
        <div style={{backgroundColor: "antiquewhite"}}>
       <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Address : {props.other.address}</h1>
        <h1>Modile : {props.other.mobile}</h1>
        </div>
    );
}

export default Student_props;