import React from 'react';

import { Container, GridContainer, BrandContainer, Column, CopyrightContainer } from './styles';

const Footer = () => {
    return (
        <Container>
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
                </Column>

            </GridContainer>
            <CopyrightContainer>
                <p>Copyright ©2023 ClosetChic </p>
            </CopyrightContainer>
        </Container>
    );
};

export default Footer;