import React, { useState } from 'react';

const City = (props) => {
    const [showText, setShowText] = useState(false);

    return( 
        <div onClick={() => setShowText(!showText)}>
        <h5>{props.name}</h5>
        {showText && <div>Info about city</div>}
        </div>
    )
}

export default City;
