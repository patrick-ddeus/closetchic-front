import React from 'react';
import {
    ShippingGroup,
    Divisor,
    InputCheckout,
    PaymentInput,
    PaymentCards,
} from './styles';
import payments from "../../../assets/payments.png";
import pix from "../../../assets/pix.png";

const CheckoutForm = (
    {
        form,
        invalidInputs,
        onChange,
        onChangePayment,
        selectedPayment,
        setSelectedPayment
    }
) => {
    return (
        <div>
            <Divisor>
                <h3>Informações de Contato</h3>
                <div>
                    <label htmlFor="email">Endereço de Email</label>
                    <InputCheckout
                        isInvalid={invalidInputs.email}
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        type="email"
                        id="email" />
                </div>
            </Divisor>
            <Divisor>
                <h3>Informações de Envio</h3>
                <ShippingGroup>
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <InputCheckout
                            isInvalid={invalidInputs.nome}
                            value={form.nome}
                            name="nome"
                            onChange={onChange}
                            type="text"
                            id="nome" />
                    </div>

                    <div>
                        <label htmlFor="sobrenome">Sobrenome</label>
                        <InputCheckout
                            isInvalid={invalidInputs.sobrenome}
                            value={form.sobrenome}
                            name="sobrenome"
                            onChange={onChange}
                            type="text"
                            id="sobrenome" />
                    </div>
                </ShippingGroup>

                <div className="address-group">
                    <div>
                        <label htmlFor="endereco">Endereço</label>
                        <InputCheckout
                            isInvalid={invalidInputs.endereco}
                            value={form.endereco}
                            name="endereco"
                            onChange={onChange}
                            type="text"
                            id="endereco" />
                    </div>

                    <div>
                        <label htmlFor="numero">Número</label>
                        <InputCheckout
                            isInvalid={invalidInputs.numero}
                            value={form.numero}
                            name="numero"
                            onChange={onChange}
                            type="text"
                            id="numero" />
                    </div>

                    <div>
                        <label htmlFor="complemento">Complemento (Opcional)</label>
                        <InputCheckout
                            value={form.complemento}
                            name="complemento"
                            onChange={onChange}
                            type="text"
                            id="complemento" />
                    </div>

                </div>

                <div className="city-group">
                    <div>
                        <label htmlFor="cidade">Cidade</label>
                        <InputCheckout
                            isInvalid={invalidInputs.cidade}
                            value={form.cidade}
                            name="cidade"
                            onChange={onChange}
                            type="text"
                            id="cidade" />
                    </div>

                    <div>
                        <label htmlFor="bairro">Bairro</label>
                        <InputCheckout
                            isInvalid={invalidInputs.bairro}
                            value={form.bairro}
                            name="bairro"
                            onChange={onChange}
                            type="text"
                            id="bairro" />
                    </div>

                    <div>
                        <label htmlFor="cep">CEP</label>
                        <InputCheckout
                            isInvalid={invalidInputs.cep}
                            value={form.cep}
                            name="cep"
                            onChange={onChange}
                            type="text"
                            pattern="^\d{5}-?\d{3}$"
                            id="cep" />
                    </div>
                </div>

                <div className="cell-group">
                    <label htmlFor="tel">Número de telefone</label>
                    <InputCheckout
                        value={form.telefone}
                        name="telefone"
                        isInvalid={invalidInputs.telefone}
                        onChange={onChange}
                        type="tel"
                        id="tel"
                        pattern="\([0-9]{2}\)\s[0-9]{4,5}-[0-9]{4}"
                    />
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
                                checked={selectedPayment === "creditCard"}
                                onChange={onChangePayment}
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
                                checked={selectedPayment === "pix"}
                                onChange={onChangePayment} />
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