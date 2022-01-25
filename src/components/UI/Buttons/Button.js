import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
width: 100px;
height: 40px;
background: ${props => (props.primary ? "blue" : "red")};
border-color: red;
margin-top: 30px;
border-radius: 10px;
cursor: pointer;
margin-left: 15px;
`;

const Button = (props) => {

    return <StyledButton {...props}>{props.title}</StyledButton>
}
export default Button;
