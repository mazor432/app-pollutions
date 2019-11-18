import React, { useState, useEffect } from 'react';
import { getCityInfo } from '../../API/wiki';
import { CityTitle, CityWrapper, CityDescription } from './style'

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
        <CityWrapper onClick={() => setShowText(!showText)}>
            <CityTitle>{props.name}</CityTitle>
            {showText && <CityDescription>{cityInfo}</CityDescription>}
        </CityWrapper>
    )
}

export default City;
