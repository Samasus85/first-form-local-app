import styled from "styled-components";

const StyledContainer = styled.div`
margin: 30px;
`

const Container = ({ children }) => {
    return <StyledContainer >{children}</StyledContainer>
}
export default Container;
