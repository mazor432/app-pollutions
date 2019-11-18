import React, { useState, useEffect } from 'react';
import { getCityInfo } from '../../API/wiki';

const City = (props) => {
    const [showText, setShowText] = useState(false);
    const [cityInfo, setCityInfo] = useState([]);

    useEffect(() => {
        getCityInfo(props.name).then(res => {
            let cityNfo = Object.values(res)
            setCityInfo(cityNfo[0].extract);
        })
      },[props.name]);
    return( 
        <div onClick={() => setShowText(!showText)}>
            <h5>{props.name}</h5>
            {showText && <div>{cityInfo}</div>}
        </div>
    )
}

export default City;
