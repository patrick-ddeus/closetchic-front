import React, { useState } from 'react';
import {
    ShippingGroup,
    Divisor,
    InputCheckout,
    PaymentInput,
    PaymentCards,
} from './styles';
import payments from "../../../assets/payments.png";
import pix from "../../../assets/pix.png";


const CheckoutForm = () => {
    const [selectedPayments, setSelectedPayment] = useState("");

    const handleOnChangePayment = (event) => {
        setSelectedPayment(event.target.value);
    };

    return (
        <div>
            <Divisor>
                <h3>Informações de Contato</h3>
                <div>
                    <label htmlFor="email">Endereço de Email</label>
                    <InputCheckout type="text" id="email" />
                </div>
            </Divisor>
            <Divisor>
                <h3>Informações de Envio</h3>
                <ShippingGroup>
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <InputCheckout type="text" id="nome" />
                    </div>

                    <div>
                        <label htmlFor="sobrenome">Sobrenome</label>
                        <InputCheckout type="text" id="sobrenome" />
                    </div>
                </ShippingGroup>

                <div className="address-group">
                    <label htmlFor="endereco">Endereço</label>
                    <InputCheckout type="text" id="endereco" />
                </div>

                <div className="city-group">
                    <div>
                        <label htmlFor="cidade">Cidade</label>
                        <InputCheckout type="text" id="cidade" />
                    </div>

                    <div>
                        <label htmlFor="bairro">Bairro</label>
                        <InputCheckout type="text" id="bairro" />
                    </div>

                    <div>
                        <label htmlFor="cep">CEP</label>
                        <InputCheckout type="text" id="cep" />
                    </div>
                </div>

                <div className="cell-group">
                    <label htmlFor="tel">Número de telefone</label>
                    <InputCheckout type="text" id="tel" />
                </div>
            </Divisor>
            <Divisor>
                <h3>Informações de Pagamento</h3>
                <PaymentCards>
                    <PaymentInput onClick={() => setSelectedPayment("creditCard")}>
                        <div>
                            <input
                                type="radio"
                                name="payment"
                                value="creditCard"
                                checked={selectedPayments === "creditCard"}
                                onChange={handleOnChangePayment}
                            />
                            <p>Cartão de Crédito</p>
                        </div>
                        <img src={payments} alt="payments" />
                    </PaymentInput>

                    <PaymentInput onClick={() => setSelectedPayment("pix")}>
                        <div>
                            <input
                                type="radio"
                                name="payment"
                                value="pix"
                                checked={selectedPayments === "pix"}
                                onChange={handleOnChangePayment} />
                            <p>Pix</p>
                        </div>
                        <img src={pix} alt="payments" />
                    </PaymentInput>
                </PaymentCards>
            </Divisor>
        </div>
    );
};

export default CheckoutForm;