import { motion } from 'framer-motion';
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
            <motion.div
                initial={{
                    opacity: 0,
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96]
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 0.5,
                        duration: 0.5,
                        ease: [0.43, 0.13, 0.23, 0.96]
                    }
                }}
                exit={{
                    opacity: 0,
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96]
                }}>
                <MainContent />
                <Footer />
            </motion.div>
        </div>
    );
};

export default HomePage;
