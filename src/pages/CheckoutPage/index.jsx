import React, { useContext } from 'react';
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

const CheckoutPage = () => {
    const { getTotalItemsFromCart, cart } = useContext(CartContext);
    const navigate = useNavigate();

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
                    <CheckoutForm />
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
                        <CheckoutButton>
                            Continuar
                        </CheckoutButton>
                    </RightColumnArea>
                </RightColumn>
            </GridContainer>
        </Container >
    );
};

export default CheckoutPage;