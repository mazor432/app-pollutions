import styled from 'styled-components'

export const HintWrapper = styled.ul`
    width: 40%;
    position: relative;
    background-color: white;
    box-shadow: 0px 0px 40px #B7B7B7;
    z-index: 100;
    list-style-type: none;
    top:10px;
    margin-block:0; 
    margin-inline:0;
    padding-block:0; 
    padding-inline:0; 
`

export const Hint = styled.li`
    width: 100%;
    height: 35px;
    font-weight: 300;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
    margin: 0;
    padding: 0;
    &:hover {
        background-color: #f2f2f2;
        font-weight: 400;
    }
    &:first-child {
        padding-top: 5px;
    }
`

export const StyledInput = styled.input`
    width: 40%;
    height: 100%;
    padding: 20px;
    border: 0;
    font-size: 25px;
    font-weight: 300;
    border-bottom: 3px solid #C8CCD4;
    transition: all .150s ease;
    background-color: white;
    text-align: center;
    &:focus {
        outline: none
        box-shadow: 0px 0px 40px #B7B7B7;
    }
`
