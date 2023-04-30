import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext.js";
import { useState, useContext, useRef } from "react";
import axios from 'axios';
import { BackgroundImage, FormContainer, InputContainer, Linked, SignInButton, SignInContainer, TextDiv } from "./styles.jsx";
import { IoIosLock, IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
import ClosetChicApi from "../../service/closetChic.api.js";

export default function SignInPage() {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [form, setForm] = useState({ email: "", password: "" });
    const [isDisabled, setIsDisabled] = useState(false);
    const { setToken, setName } = useContext(UserContext);
    const [invalidInputs, setInvalidInputs] = useState({
        email: null,
        password: null
    });

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        if (value === "" || !event.target.validity.valid) {
            switch (name) {
                case "email":
                    emailRef.current.focus();
                    break;
                case "password":
                    passwordRef.current.focus();
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
    function getInputStyle(inputName) {
        return invalidInputs[inputName] ? { border: "2px solid red" } : {};
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

    async function signIn(e) {
        e.preventDefault();
        setIsDisabled(true);
        try {
            const response = await ClosetChicApi.authenticateUser(form);
            navigate("/");
            setToken(response.token);
            setName(response.name);
            localStorage.setItem("token", response.token);
        } catch (error) {
            alert(error.message);
        } finally {
            setIsDisabled(false);
        }
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
                <SignInContainer>
                    <TextDiv>Faça Login</TextDiv>
                    <FormContainer onSubmit={signIn}>
                        <InputContainer>
                            <input
                                ref={emailRef}
                                placeholder="E-mail"
                                type="email"
                                disabled={isDisabled}
                                name={"email"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={getInputStyle("email")} />
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
                                autoComplete="new-password"
                                disabled={isDisabled}
                                name={"password"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={getInputStyle("password")} />
                            <IoIosLock
                                color={'#00000'}
                                title={"person"}
                                height="26x"
                                width="38px"
                            />
                        </InputContainer>
                        <SignInButton disabled={isDisabled} type="submit">Entrar</SignInButton>
                    </FormContainer>
                    <Link to="/sign-up">
                        <Linked>Primeira vez? Cadastre-se!</Linked>
                    </Link>
                    <Link to="/">
                        <Linked>Continue sem login</Linked>
                    </Link>
                </SignInContainer>
            </motion.div>
        </BackgroundImage>
    );
}
