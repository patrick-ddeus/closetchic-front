import React from 'react';
import DescountBar from '../../components/DescountBar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContent from './MainContent';

const HomePage = () => {
    return (
        <div>
            <DescountBar />
            <Header />
            <MainContent />
            <Footer/>
        </div>
    );
};

export default HomePage;
