import React, {useState} from 'react';
import Autocomplete from './Components/Autocomplete';
import CitiesList from './Components/CitiesList';

import { StyledApp, Wrapper, StyledTitle } from './style';
import { getCities } from './API/openaq';


function App() {
  const [loading, setLoading] = useState(false)
  const [cities, setCities] = useState([]);

  const getCitiesList = (key) => {
    setLoading(true);
    getCities(key).then(res => {
      setCities(res);
      setLoading(false);
    });
  }

  return (
    <StyledApp>
      <Wrapper >
        <StyledTitle>The most polluted cities:</StyledTitle>
        <Autocomplete  getCitiesList={getCitiesList}/>
        { !loading && <CitiesList cities={cities}/>}
      </Wrapper>
  </StyledApp>
  );
}

export default App;
