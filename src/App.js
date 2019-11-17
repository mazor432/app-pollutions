import React from 'react';
import { StyledApp, Wrapper, StyledTitle } from './style';
import Autocomplete from './Components/Autocomplete';

function App() {

  return (
    <StyledApp>
    <Wrapper >
      <StyledTitle>The most polluted cities:</StyledTitle>
      <Autocomplete />
    </Wrapper>
  </StyledApp>
  );
}

export default App;
