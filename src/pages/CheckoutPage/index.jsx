import React, { useContext, useEffect, useState } from 'react';
import {
    Container,
    HeaderCheckout,
    GridContainer,
    LeftColumn,
    RightColumn,
    RightColumnArea,
    TotalArea,
    ProductDescription,
    CheckoutButton,
    Blur,
    ModalDone
} from './styles';
import { CartContext } from '../../contexts/cartContext';
import { useNavigate } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import axios from 'axios';
import ClosetChicApi from '../../service/closetChic.api';
import { UserContext } from '../../contexts/userContext';
import Loader from '../../components/Loader';
import doneImg from "../../assets/done.png";
import { motion } from 'framer-motion';

const CheckoutPage = () => {
    const { getTotalItemsFromCart, cart, coupon } = useContext(CartContext);
    const { token } = useContext(UserContext);
    const navigate = useNavigate();
    const [selectedPayment, setSelectedPayment] = useState("creditCard");
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [form, setForm] = useState({
        email: "",
        nome: "",
        sobrenome: "",
        endereco: "",
        numero: "",
        complemento: "",
        cidade: "",
        bairro: "",
        cep: "",
        telefone: ""
    });

    const [invalidInputs, setInvalidInputs] = useState({
        email: false,
        nome: false,
        sobrenome: false,
        endereco: false,
        numero: false,
        cidade: false,
        bairro: false,
        cep: false,
    });

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, []);

    const handleValidInputs = () => {
        let isValid = true;
        for (let [key, value] of Object.entries(form)) {
            if (key !== "complemento" && key !== "telefone") { // Verifica se todos os campos exceto o complemento e telefone estão preenchidos.
                if (!value) {
                    setInvalidInputs((prevInvalidInputs) => ({ ...prevInvalidInputs, [key]: true }));
                    isValid = false;
                } else {
                    setInvalidInputs((prevInvalidInputs) => ({ ...prevInvalidInputs, [key]: false }));
                }
            }
        }
        return isValid;
    };

    const handleOnChangePayment = (event) => {
        setSelectedPayment(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value, validity } = event.target;

        switch (name) {
            case "cep":
                handleCepChange(name, value);
                break;
            case "telefone":
                handleTelChange(name, value);
                break;
            case "numero":
                handleNumberChange(name, value);
                break;
            default:
                setForm((prevForm) => ({ ...prevForm, [name]: value }));;
        }

        if (value === "" || !validity.valid) {
            setInvalidInputs((prevInvalidInputs) => ({ ...prevInvalidInputs, [name]: true }));
        } else {
            setInvalidInputs((prevInvalidInputs) => ({ ...prevInvalidInputs, [name]: false }));
        }
    };

    async function handleCepChange(name, value) {
        const cleanValueAndFormat = value.replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1');
        setForm((prevForm) => ({ ...prevForm, [name]: cleanValueAndFormat }));

        if (value.length >= 9) {
            try {
                const { data } = await axios.get(`https://viacep.com.br/ws/${value}/json/`);
                setForm((prevForm) => {
                    return {
                        ...prevForm,
                        endereco: data.logradouro,
                        bairro: data.bairro,
                        cidade: data.localidade,
                        [name]: cleanValueAndFormat
                    };
                });
            } catch (error) {
                console.error(error);
            }
        }
    };

    function handleTelChange(name, value) {
        const cleanValueAndFormat = value.replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1'); // Remove todos os caracteres que não são números do valor
        setForm((prevForm) => ({ ...prevForm, [name]: cleanValueAndFormat }));
    }

    function handleNumberChange(name, value) {
        const cleanValue = value.replace(/\D/g, '');
        setForm((prevForm) => ({ ...prevForm, [name]: cleanValue }));
    }

    const cartGetTotal = () => {
        return cart?.reduce((total, item) => total + (item.price * item.quantity), 0) - coupon.value;
    };

    const cartGetSubtotal = () => {
        return cart?.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const handleSubmitCheckout = async () => {
        if (!handleValidInputs()) return;
        console.log("foi");

        const body = {
            orderItems: cart,
            shippingAddress: {
                fullName: `${form.nome} ${form.sobrenome}`,
                address: {
                    district: form.bairro,
                    city: form.cidade,
                    street: form.endereco,
                    number: form.numero,
                    complement: form.complemento
                },
                postalCode: form.cep,
            },
            tel: form.telefone,
            email: form.email,
            priceItems: cartGetSubtotal(),
            totalPrice: cartGetTotal(),
            paymentMethod: selectedPayment,
            isPaid: true,
            paidAt: Date.now()
        };

        setLoading(true);

        try {
            const response = await ClosetChicApi.sendOrder(body, token);
            if (response) {
                setIsOpen(true);
            }
        } catch (error) {
            console.error(error);
            setIsOpen(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading && <Loader />}
            {isOpen &&
                <Blur>
                    <motion.div
                        initial={{
                            y: -100,
                            opacity: 0,
                            duration: 0.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.1,
                                duration: 0.5,
                                ease: [0.43, 0.13, 0.23, 0.96]
                            }
                        }}
                        exit={{
                            y: 100,
                            opacity: 0,
                            duration: 0.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }}>
                        <ModalDone>
                            <img src={doneImg} alt="" />
                            <p>Eba &#129321;! Seu pedido foi realizado com sucesso!</p>
                            <button onClick={() => navigate('/')}>ok</button>
                        </ModalDone>
                    </motion.div>
                </Blur>
            }
            <motion.div
                initial={{
                    opacity: 0,
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96]
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 0.1,
                        duration: 0.5,
                        ease: [0.43, 0.13, 0.23, 0.96]
                    }
                }}
                exit={{
                    opacity: 0,
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96]
                }}>


                <Container loading={loading || isOpen}>
                    <HeaderCheckout >
                        <h1 onClick={() => navigate('/')}>ClosetChic</h1>
                        <h2>Checkout</h2>
                    </HeaderCheckout>
                    <GridContainer>
                        <LeftColumn>
                            <CheckoutForm
                                form={form}
                                setSelectedPayment={setSelectedPayment}
                                selectedPayment={selectedPayment}
                                invalidInputs={invalidInputs}
                                onChange={handleInputChange}
                                onChangePayment={handleOnChangePayment} />
                        </LeftColumn>

                        <RightColumn>
                            <RightColumnArea>
                                <h3>{getTotalItemsFromCart()} itens</h3>
                                <ProductDescription>
                                    <span>
                                        <p>Subtotal Produto</p>
                                        <p>R$ {cartGetTotal().toFixed(2)}</p>
                                    </span>

                                    <span>
                                        <p>Descontos</p>
                                        <p>R$ {coupon.value.toFixed(2)}</p>
                                    </span>

                                    <span>
                                        <p>Entrega</p>
                                        <p>Grátis</p>
                                    </span>

                                    <span>
                                        <p>Taxas Estimadas</p>
                                        <p>R$ 0.00</p>
                                    </span>
                                </ProductDescription>
                                <TotalArea>
                                    <p>Total Estimado</p>
                                    <p>R$ {cartGetTotal().toFixed(2)}</p>
                                </TotalArea>
                                <CheckoutButton onClick={handleSubmitCheckout}>
                                    Continuar
                                </CheckoutButton>
                            </RightColumnArea>
                        </RightColumn>
                    </GridContainer>
                </Container >
            </motion.div>
        </>
    );
};

export default CheckoutPage;