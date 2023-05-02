import React from 'react';
import { Container, Banner, BannerButton, TopSection, CardSection, Card, CardIcon, MapSection } from './styles';
import { FiSmile, FiDollarSign, FiBox, FiTruck } from "react-icons/fi";
import FeatureProducts from './FeatureProducts';
import DescountBanner from './DescountBanner';
import { useNavigate } from 'react-router-dom';

const MainContent = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Banner>
                <h2>Eleve o seu estilo com nossa coleção de inverno</h2>
                <BannerButton onClick={() => navigate('/products')}>
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
            <MapSection >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28061.00349420912!2d-52.83442988947884!3d-28.460705499916646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fd493c92d28c8f%3A0x6ff21ca741cec0c8!2sN%C3%A3o-Me-Toque%2C%20RS%2C%2099470-000!5e0!3m2!1spt-BR!2sbr!4v1623249150399!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="600"
                    title='map'
                    style={{ border: "0" }}
                    allowfullscreen="" loading="lazy">
                </iframe>
            </MapSection>
        </Container>
    );
};

export default MainContent;
