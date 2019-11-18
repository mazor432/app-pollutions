import React from 'react';
import City from '../City';

const CitiesList = (props) => {
    return(
    props.cities.map(city => (
        //fetch data
        <City name={city}/>
    ))
    )
}
export default CitiesList;
