import React, {useState, useEffect } from 'react';
import City from '../City';

const CitiesList = (props) => {
    return(
        props.cities.map(city => (
            <City name={city}/>
        ))
     )
}
export default CitiesList;
