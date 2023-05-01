import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios, { formToJSON } from "axios";
import "@fontsource/raleway";
import "@fontsource/inter";
import { IoMdMail, IoMdPerson, IoIosLock } from "react-icons/io";
import {
  BackgroundImage,
  FormContainer,
  InputContainer,
  Linked,
  SignUpButton,
  SignUpContainer,
  TextDiv,
} from "./styles.jsx";
import { motion } from "framer-motion";
import ClosetChicApi from "../../service/closetChic.api.js";
import ButtonLoader from "../../components/ButtonLoader/index.jsx";

export default function SignUpPage() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repPasswordRef = useRef(null);
  const [invalidInputs, setInvalidInputs] = useState({
    name: null,
    email: null,
    password: null,
    repeatPassword: null,
  });
  const [form, setForm] = useState({ name: "", email: "", password: "", repeatPassword: "" });
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });

    if (value === "" || !event.target.validity.valid) {
      switch (name) {
        case "name":
          nameRef.current.focus();
          break;
        case "email":
          emailRef.current.focus();
          break;
        case "password":
          passwordRef.current.focus();
          break;
        case "repeatPassword":
          repPasswordRef.current.focus();
          break;
        default:
          return;
      }

      // adiciona o input inválido ao estado
      setInvalidInputs((prevInvalidInputs) => ({
        ...prevInvalidInputs,
        [name]: true,
      }));
    } else {
      // remove o input inválido do estado
      setInvalidInputs((prevInvalidInputs) => {
        const { [name]: removedInput, ...rest } = prevInvalidInputs;
        return rest;
      });
    }
  }

  function handleBlur(event) {
    const { name, value } = event.target;
    if (value === "" || !event.target.validity.valid) {

      // adiciona o input inválido ao estado
      setInvalidInputs((prevInvalidInputs) => ({
        ...prevInvalidInputs,
        [name]: true,
      }));
    } else {
      // remove o input inválido do estado
      setInvalidInputs((prevInvalidInputs) => {
        const { [name]: removedInput, ...rest } = prevInvalidInputs;
        return rest;
      });
    }
  }

  const handleValidInputs = () => {
    let isValid = true;
    Object.entries(form).forEach(([name, value]) => {
      if (value === "") {
        setInvalidInputs((prevInvalidInputs) => ({
          ...prevInvalidInputs,
          [name]: true,
        }));
        isValid = false;
      }
    });
    return isValid;
  };

  async function signUp(e) {
    e.preventDefault();
    // verifica se há campos vazios e os marca como inválidos
    if (!handleValidInputs()) return;

    if (form.password !== form.repeatPassword) {
      return alert("Senhas diferentes");
    }

    setIsLoading(true);

    try {
      await ClosetChicApi.registerUser({ name: form.name, email: form.email, password: form.password });
      navigate("/sign-in");
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function getInputStyle(inputName) {
    return invalidInputs[inputName] ? { boxShadow: "0 0 0 2px red", backgroundColor: "#F9DDD8" } : {};
  }

  return (
    <BackgroundImage>
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.1,
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96]
          }
        }}
        exit={{
          opacity: 0,
          y: -100,
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}>
        <SignUpContainer>
          <TextDiv>Cadastre-se</TextDiv>
          <FormContainer onSubmit={signUp}>
            <InputContainer>
              <input
                ref={nameRef}
                placeholder="Nome"
                type="text"
                name={"name"}
                value={form.name}
                onChange={handleChange}
                disabled={isLoading}
                style={getInputStyle("name")}
                onBlur={handleBlur} />
              <IoMdPerson
                color={'#00000'}
                title={"person"}
                height="26x"
                width="38px"
              />
            </InputContainer>
            <InputContainer>
              <input
                ref={emailRef}
                placeholder="E-mail"
                type="email"
                value={form.email}
                name={"email"}
                onChange={handleChange}
                disabled={isLoading}
                style={getInputStyle("email")}
                onBlur={handleBlur} />
              <IoMdMail
                color={'#00000'}
                title={"person"}
                height="26x"
                width="38px"
              />
            </InputContainer>
            <InputContainer>
              <input
                ref={passwordRef}
                placeholder="Senha"
                type="password"
                value={form.password}
                autoComplete="new-password"
                name={"password"}
                onChange={handleChange}
                disabled={isLoading}
                style={getInputStyle("password")}
                onBlur={handleBlur} />
              <IoIosLock
                color={'#00000'}
                title={"person"}
                height="26x"
                width="38px"
              />
            </InputContainer>
            <InputContainer>
              <input
                ref={repPasswordRef}
                placeholder="Confirme a senha"
                type="password"
                value={form.repeatPassword}
                autoComplete="new-password"
                name={"repeatPassword"}
                onChange={handleChange}
                disabled={isLoading}
                style={getInputStyle("repeatPassword")}
                onBlur={handleBlur} />
              <IoIosLock
                color={'#00000'}
                title={"person"}
                height="26x"
                width="38px"
              />
            </InputContainer>
            <SignUpButton disabled={isLoading} type="submit" >
              {isLoading ? <ButtonLoader /> : "Cadastrar"}
            </SignUpButton>
          </FormContainer>
          <Link to="/sign-in">
            <Linked>Já tem uma conta? Entre agora!</Linked>
          </Link>
          <Link to="/">
            <Linked>Continue sem login</Linked>
          </Link>
        </SignUpContainer>
      </motion.div >
    </BackgroundImage>
  );
}








