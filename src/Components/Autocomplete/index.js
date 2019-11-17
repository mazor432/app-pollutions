import React, { Component } from 'react';
import CountryInput from '../CountryInput';
import countries from '../../data/countries.json';

class Autocomplete extends Component {
    state = {
        hints: '',
        search: ''
    }

componentDidMount() {
    this.setState({
        search: localStorage.getItem("searchValue")
    });
    }

filterHints = (value) => (
    countries.countries.filter( country => country.name.toLowerCase().includes(value.toLowerCase()))
)  

onInputChange = (event) => {
    this.setState({
        search: event.target.value,
        hints: this.filterHints(event.target.value)
    })
    localStorage.setItem('searchValue', event.target.value);
}

onInputFocus = () => {
    this.setState({
        hints: this.filterHints(this.state.search)
    });
}

onHintClick = (hint) => {
    this.setState({
        hints: [],
        search:  hint
    });
    localStorage.setItem("searchValue", hint);
}


     
render(){
    return(
        <CountryInput 
            onInputFocus={this.onInputFocus}
            onInputChange={this.onInputChange}
            hintsList={this.state.hints}
            onHintClick={this.onHintClick}
            value={this.state.search}
        />
    )
}
} 

export default Autocomplete;
