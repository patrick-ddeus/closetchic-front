import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from 'axios';


import "@fontsource/raleway"
import "@fontsource/inter"
import { IoMdMail, IoMdPerson, IoIosLock } from "react-icons/io";
import { BackgroundImage, FormContainer, InputContainer, SignUpButton, SignUpContainer, TextDiv } from "./styles.jsx";


export default function SignUpPage() {
  const navigate = useNavigate()
  const url = process.env.API_URL
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [isDisabled, setIsDisabled] = useState(false)
  let repeatPassword = ""
  function handleChange(event) {
    if (event.target.name === "repeatPassword") {
      repeatPassword = event.target.value
      console.log(repeatPassword)
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

    const promise = axios.post(`http://localhost:8000/sign-up/`, form)
    setIsDisabled(true)
    promise.then((a) => {
      navigate("/")
      setIsDisabled(false)
    })
    promise.catch((a) => {
      alert(a)
      console.log(a)
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
            <IoMdPerson
              color={'#00000'}
              title={"person"}
              height="26x"
              width="38px"
            />
          </InputContainer>
          <InputContainer>
            <input placeholder="E-mail" type="email" name={"email"} onChange={handleChange} disabled={isDisabled} />
            <IoMdMail
              color={'#00000'}
              title={"person"}
              height="26x"
              width="38px"
            />
          </InputContainer>
          <InputContainer>
            <input placeholder="Senha" type="password" autoComplete="new-password" name={"password"} onChange={handleChange} disabled={isDisabled} />
            <IoIosLock
              color={'#00000'}
              title={"person"}
              height="26x"
              width="38px"
            />
          </InputContainer>
          <InputContainer>
            <input placeholder="Confirme a senha" type="password" autoComplete="new-password" name={"repeatPassword"} onChange={handleChange} disabled={isDisabled} />
            <IoIosLock
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








