import React from 'react';
import { StyledInput, HintWrapper, Hint } from './style'

const CountryInput = (props) => {
  const { hintsList, onInputFocus, onInputChange, onHintClick, value} = props 
    return (
      <>
        <StyledInput onFocus={onInputFocus} onChange={onInputChange} value={value} />
        {hintsList && (
          <HintWrapper>
              {hintsList.map( (hint, id) => (
                  <Hint 
                    key={id} 
                    onClick={() => onHintClick(hint.name)}>
                    {hint.name}
                  </Hint>
              ))}
          </HintWrapper>      
        )}
      </>
    )
}

export default CountryInput;
