import styled from "styled-components";
import hangers from "../../assets/hangers.png";

export const SignUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index:1;
  a{
    z-index:1;
  }
`;
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
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index:1;
  input{
    width: 326px;
    padding:16px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 34px;
    padding-left:60px;
    background: #D9D9D9;
    border:none;
    font-family: 'Inter';
    border-radius:5px;
  }
  input::placeholder {
    color: #000000;
}
`;
export const InputContainer = styled.div`
position:relative;
svg {
    position: absolute;
    left: 22px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 25px;
  }
`;

export const SignUpButton = styled.button`
  width: 326px;
  padding:16px;
  background: #007DC0;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #FFFFFF;
  border-radius:5px;
  border:none;
  cursor:pointer;
  transition:transform .2s ease;

  &:hover{
    transform:scale(1.02);
  }

`;
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
export const Linked = styled.div`
  color: white;
  z-index: 1;
  margin-top:20px;
`;
