import React from 'react';
import underConstruction from "../../assets/under-construction.png";
import DescountBar from '../../components/DescountBar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MainContainer, Container } from './styles';

function UnderConstructionPage() {

    return (
        <Container>
            <DescountBar />
            <Header />
            <MainContainer>
                <img src={underConstruction} alt="" />
            </MainContainer>
            <Footer/>
        </Container>
    );
}

export default UnderConstructionPage;