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
    CheckoutButton
} from './styles';
import { CartContext } from '../../contexts/cartContext';
import { useNavigate } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import axios from 'axios';
import ClosetChicApi from '../../service/closetChic.api';
import { UserContext } from '../../contexts/userContext';

const CheckoutPage = () => {
    const { getTotalItemsFromCart, cart } = useContext(CartContext);
    const { token } = useContext(UserContext);
    const navigate = useNavigate();
    const [selectedPayment, setSelectedPayment] = useState("creditCard");
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

    const handleSubmitCheckout = async () => {
        if (!handleValidInputs()) return;

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
            totalPrice: getTotalItemsFromCart(),
            paymentMethod: selectedPayment,
            isPaid: true,
            paidAt: Date.now()
        };

        try {
            const response = await ClosetChicApi.sendOrder(body, token)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    };

    const handleValidInputs = () => {
        let isValid = '';
        for (let [key, value] of Object.entries(form)) {
            if (key !== "complemento") { // Verifica se todos os campos exceto o complemento estão preenchidos.
                if (!value) {
                    setInvalidInputs((prevInvalidInputs) => ({ ...prevInvalidInputs, [key]: true }));
                    isValid = false;
                } else {
                    setInvalidInputs((prevInvalidInputs) => ({ ...prevInvalidInputs, [key]: false }));
                    isValid = true;
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
        return cart.reduce((total, item) => total + item.price, 0);
    };

    return (
        <Container>
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
                                <p>R$ 0.00</p>
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
    );
};

export default CheckoutPage;