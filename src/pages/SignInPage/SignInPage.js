import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext.js";
import { useState, useContext, useRef } from "react";
import { BackgroundImage, FormContainer, InputContainer, Linked, SignInButton, SignInContainer, TextDiv } from "./styles.jsx";
import { IoIosLock, IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
import ClosetChicApi from "../../service/closetChic.api.js";
import ButtonLoader from "../../components/ButtonLoader/index.jsx";

export default function SignInPage() {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [form, setForm] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [invalidInputs, setInvalidInputs] = useState({
        email: null,
        password: null
    });
    const { setToken, setName } = useContext(UserContext);


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
        return invalidInputs[inputName] ? { boxShadow: "0 0 0 2px red", backgroundColor: "#F9DDD8" } : {};
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

    async function signIn(e) {
        e.preventDefault();
        if (!handleValidInputs()) return;

        setIsLoading(true);
        try {
            const { token, name } = await ClosetChicApi.authenticateUser(form);
            navigate("/");
            setToken(token);
            setName(name);
            localStorage.setItem("userinfo", JSON.stringify({ token, name }));
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
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
                                disabled={isLoading}
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
                                disabled={isLoading}
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
                        <SignInButton
                            disabled={isLoading}
                            type="submit">
                            {isLoading ? <ButtonLoader /> : "Entrar"}
                        </SignInButton>
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
