import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext.js";
import { useState, useContext } from "react";
import axios from 'axios';
import { BackgroundImage, FormContainer, InputContainer, Linked, SignInButton, SignInContainer, TextDiv } from "./styles.jsx";
import { IoIosLock, IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

export default function SignInPage() {
    const navigate = useNavigate();
    const url = process.env.REACT_APP_API_URL;
    const [form, setForm] = useState({ email: "", password: "" });
    const [isDisabled, setIsDisabled] = useState(false);
    const { setToken, setName } = useContext(UserContext);
    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    function signIn(e) {
        e.preventDefault();
        const promise = axios.post(`http://localhost:8000/sign-in/`, form);
        setIsDisabled(true);
        promise.then((a) => {
            navigate("/");
            setIsDisabled(false);
            setToken(a.data.token);
            setName(a.data.name);
            localStorage.setItem("token", a.data.token);
        });
        promise.catch((a) => {
            alert(a.message);
            setIsDisabled(false);
        });

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
                            <input placeholder="E-mail" type="email" disabled={isDisabled} name={"email"} onChange={handleChange} />
                            <IoMdMail
                                color={'#00000'}
                                title={"person"}
                                height="26x"
                                width="38px"
                            />
                        </InputContainer>
                        <InputContainer>
                            <input placeholder="Senha" type="password" autoComplete="new-password" disabled={isDisabled} name={"password"} onChange={handleChange} />
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

