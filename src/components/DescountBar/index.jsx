import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { Container } from './styles';

const DescountBar = () => {
    const location = useLocation();
    const { token, name } = useContext(UserContext);

    return (
        <Container>
            {
                location.pathname === "/under-construction" ?
                    (<p>Oops! essa página ainda está em construção!</p>) : !token ?
                        (<p><span>Inscreva-se</span> para receber 20% de desconto.</p>) :
                        (<p>Seja Bem vindo <span>{name}</span>!</p>)
            }
        </Container>
    );
};

export default DescountBar;
