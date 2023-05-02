import React from 'react';
import cardPayments from "../../assets/payments.png";
import { Container, GridContainer, BrandContainer, Column, CopyrightContainer, ResponsiveFooter } from './styles';
import { IoBagOutline, IoHomeOutline, IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <div>
                    <GridContainer>
                        <BrandContainer>
                            <h4>ClosetChic</h4>
                            <p>Especializados em providenciar produtos de alta qualidade</p>
                        </BrandContainer>

                        <Column>
                            <h4>Shop</h4>
                            <ul>
                                <li>Produtos</li>
                            </ul>
                        </Column>

                        <Column>
                            <h4>Company</h4>
                            <ul>
                                <li>Sobre nós</li>
                                <li>Contato</li>
                            </ul>
                        </Column>

                        <Column>
                            <h4>Support</h4>
                            <ul>
                                <li>FAQs</li>
                            </ul>
                        </Column>

                        <Column>
                            <h4>Métodos de Pagamento</h4>
                            <img src={cardPayments} alt="cardspayments" />
                        </Column>

                    </GridContainer>
                    <CopyrightContainer>
                        <p>Copyright ©2023 ClosetChic </p>
                    </CopyrightContainer>
                </div>
            </Container>
            <ResponsiveFooter>
                <IoHeartOutline onClick={() => navigate('/under-construction')}/>
                <IoHomeOutline onClick={() => navigate('/')}/>
                <IoBagOutline onClick={() => navigate('/products')}/>
                <IoCartOutline className="cartIcon" onClick={() => navigate('/cart')}/>
            </ResponsiveFooter>
        </>
    );
};

export default Footer;