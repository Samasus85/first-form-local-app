import styled from "styled-components";

const StyledInput = styled.input`
width: 300px;
border-radius: 10px;
height: 30px;
border: 1px solid #e6e;
font-size: 18px;
padding-left: 20px;
color: blue;

&:focus{
    outline: none;
}
`;

const Input = ({ name, type, placeholder, onChange, value }) => {
    return (
        <div>
            <StyledInput
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value} />
        </div>
    )
}
export default Input;
