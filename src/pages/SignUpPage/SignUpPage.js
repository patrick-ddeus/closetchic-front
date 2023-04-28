import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from 'axios';
import styled from "styled-components"
import hangers from "../../assets/hangers.png"
import "@fontsource/raleway"
import "@fontsource/inter"
import { Mail, LockClosed, Person } from 'react-ionicons'


export default function SignUpPage() {
  const navigate = useNavigate()
  const url = process.env.REACT_APP_BASE_URL
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [isDisabled, setIsDisabled] = useState(false)
  let repeatPassword = ""
  function handleChange(event) {
    if (event.target.name === "repeatPassword") {
      repeatPassword = event.target.value
      console.log(repeatPassword)
      console.log(process.env.REACT_APP_BASE_URL)
    }
    else {
      setForm({ ...form, [event.target.name]: event.target.value })
      console.log(form)
    }

  }
  function signUp(e) {
    e.preventDefault()
    if (form.password !== repeatPassword) {
      return alert("Senhas diferentes")
    }

    const promise = axios.post(`${url}/sign-up`, form)
    setIsDisabled(true)
    promise.then((a) => {
      navigate("/")
      setIsDisabled(false)
    })
    promise.catch((a) => {
      alert(a)
      setIsDisabled(false)
    })
  }
  return (
    <BackgroundImage>
      <SignUpContainer>
        <TextDiv>Cadastre-se</TextDiv>
        <FormContainer onSubmit={signUp}>
          <InputContainer>
            <input id="name-input" placeholder="Nome" type="text" name={"name"} onChange={handleChange} disabled={isDisabled} />
            <Person
              color={'#00000'}
              title={"person"}
              height="26x"
              width="38px"
            />
          </InputContainer>
          <InputContainer>
            <input placeholder="E-mail" type="email" name={"email"} onChange={handleChange} disabled={isDisabled} />
            <Mail
              color={'#00000'}
              title={"person"}
              height="26x"
              width="38px"
            />
          </InputContainer>
          <InputContainer>
            <input placeholder="Senha" type="password" autoComplete="new-password" name={"password"} onChange={handleChange} disabled={isDisabled} />
            <LockClosed
              color={'#00000'}
              title={"person"}
              height="26x"
              width="38px"
            />
          </InputContainer>
          <InputContainer>
            <input placeholder="Confirme a senha" type="password" autoComplete="new-password" name={"repeatPassword"} onChange={handleChange} disabled={isDisabled} />
            <LockClosed
              color={'#00000'}
              title={"person"}
              height="26x"
              width="38px"
            />          
          </InputContainer>
          <SignUpButton disabled={isDisabled} type="submit" >Cadastrar</SignUpButton>
        </FormContainer>
      </SignUpContainer>
      
    </BackgroundImage>
  )
}

const SignUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index:1;
`
const TextDiv = styled.div`
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

const FormContainer = styled.form`
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
const InputContainer = styled.div`
position:relative;
svg {
    position: absolute;
    left: 22px;
    top: 50%;
    transform: translateY(-50%);
  }
`

const SignUpButton = styled.button`
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
const BackgroundImage = styled.div`
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







