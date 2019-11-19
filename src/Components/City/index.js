import React, { useState, useEffect } from 'react';
import { getCityInfo } from '../../API/wiki';
import { CityTitle, CityWrapper, CityDescription, CityTitleWrapper } from './style'

const City = (props) => {
    const [showText, setShowText] = useState(false);
    const [cityInfo, setCityInfo] = useState([]);

    useEffect(() => {
        getCityInfo(props.name).then(res => {
            let cityNfo = Object.values(res)
            setCityInfo(cityNfo[0].extract);
        })
      },[props.name]);
    
    const cityDescriptionInfo = cityInfo ? cityInfo : <p>City Description not found</p>
    
    return( 
        <CityWrapper onClick={() => setShowText(!showText)}>
            <CityTitleWrapper>
                <CityTitle>{props.name}</CityTitle> 
                {showText ? <i className="fas fa-caret-up" /> : <i className="fas fa-caret-down" />}
            </CityTitleWrapper>
            {showText && <CityDescription>{cityDescriptionInfo}</CityDescription>}
        </CityWrapper>
    )
}

export default City;
