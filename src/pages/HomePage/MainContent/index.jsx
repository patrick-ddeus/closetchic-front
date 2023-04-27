import React from 'react';
import { Container, Banner, BannerButton, TopSection, CardSection, Card, CardIcon } from './styles';
import { FiSmile, FiDollarSign, FiBox, FiTruck } from "react-icons/fi";
import FeatureProducts from './FeatureProducts';
import DescountBanner from './DescountBanner';

const MainContent = () => {
    return (
        <Container>
            <Banner>
                <h2>Eleve o seu estilo com nossa coleção de inverno</h2>
                <BannerButton>
                    Compre Agora
                </BannerButton>
            </Banner>
            <TopSection>
                <div>
                    <p>Nós providenciamos a melhor experiência com os clientes</p>
                </div>
                <div>
                    <p>Nós garantimos que nosso clientes terão a melhor experiência de compra</p>
                </div>
            </TopSection>
            <CardSection>
                <Card>
                    <CardIcon>
                        <FiSmile />
                    </CardIcon>
                    <h4>Produtos Originais</h4>
                    <p>Nós providenciamos o dinheiro de volta
                        caso o produto não seja original</p>
                </Card>
                <Card>
                    <CardIcon>
                        <FiDollarSign />
                    </CardIcon>
                    <h4>Garantia de Satisfação</h4>
                    <p>Troque o produto que você comprou
                        se caso ele não te agrade</p>
                </Card>
                <Card>
                    <CardIcon>
                        <FiBox />
                    </CardIcon>
                    <h4>Novidade Todos os Dias</h4>
                    <p>Nós atualizamos nossas coleções
                        quase todo dia</p>
                </Card>
                <Card>
                    <CardIcon>
                        <FiTruck />
                    </CardIcon>
                    <h4>Envio Rápido & Grátis</h4>
                    <p>Nós oferecemos um envio grátis
                        para os clientes fidelidade.</p>
                </Card>
            </CardSection>
            <FeatureProducts />
            <DescountBanner />
        </Container>
    );
};

export default MainContent;
