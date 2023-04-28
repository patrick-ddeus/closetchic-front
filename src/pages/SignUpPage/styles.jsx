import styled from "styled-components"
import hangers from "../../assets/hangers.png"

export const SignUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index:1;
`
export const TextDiv = styled.div`
width: fit-content;
height: 60px;
font-style: normal;
font-family: 'Raleway';
font-weight: 600;
font-size: 51px;
line-height: 60px;
letter-spacing: 0.17em;
z-index: 1;
color: #FFFFFF;
margin-bottom:61px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 36px;
  z-index:1;
  input{
    width: 466px;
    height: 92px;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    padding-left:85px;
    background: #D9D9D9;
    border:none;
    font-family: 'Inter';
  }
  input::placeholder {
    color: #000000;
}
`
export const InputContainer = styled.div`
position:relative;
svg {
    position: absolute;
    left: 22px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 35px;
  }
`

export const SignUpButton = styled.button`
  width: 466px;
  height: 92px;
  background: #007DC0;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  color: #FFFFFF;
  border:none;
`
export const BackgroundImage = styled.div`
  background-image: url(${hangers});
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); 
    z-index: 0;
  }
`;
