

import React, { useState } from 'react';
import styled from 'styled-components'
import Input from '../UI/Input/Input';
import Button from '../UI/Buttons/Button';
import Container from '../UI/Container/Container';

const StyleForm = styled.form`
width: 500px;
height: 500px;
border-color: red;
margin: 0 auto;
margin-top: 100px;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0,0,0,0.5);
`

const FormContainer = styled.div`
padding-top: 30px;
`
const FormTitle = styled.h1`
padding-top: 30px;
`
const Form = () => {
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        address: '',
    })
    const changeInputHandler = (event) => {
        const { name, value } = event.target
        setInputValues({
            ...inputValues,
            [name]: value,
        })
    }
    const onSubmit = (event) => {
        event.preventDefault()
        setInputValues('')
        localStorage.setItem('user', JSON.stringify(inputValues))
    }
    const getUserInfo = () => {
        let userInfo = JSON.parse(localStorage.getItem('user'))
        console.log(userInfo);
    }
    return (
        <StyleForm onSubmit={onSubmit}>
            <FormContainer>
                <FormTitle >User Story</FormTitle>
                <Container>
                    <Input name="name" type="text" placeholder="Enter your name" value={inputValues.name} onChange={changeInputHandler} />
                </Container>
                <Container>
                    <Input name="email" type="text" placeholder="Enter your email" value={inputValues.email} onChange={changeInputHandler} />
                </Container>
                <Container>
                    <Input name="address" type="text" placeholder="Enter your address" value={inputValues.address} onChange={changeInputHandler} />
                </Container>
                <Button type="submit" title="Send" />
                <Button title="Get" onClick={getUserInfo} />

            </FormContainer>
        </StyleForm>
    )
}
export default Form;
