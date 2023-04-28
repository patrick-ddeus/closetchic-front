import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from './styles';

const DescountBar = () => {
    const location = useLocation();
    return (
        <Container>
            {location.pathname === "/under-construction" ?
                (<p>Oops! essa página ainda está em construção!</p>) :
                (<p><span>Inscreva-se</span> para receber 20% de desconto.</p>)}
        </Container>
    );
};

export default DescountBar;
