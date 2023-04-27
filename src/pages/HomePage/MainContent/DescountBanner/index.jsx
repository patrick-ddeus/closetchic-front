import React from 'react';

import { Container } from './styles';

const DescountBanner = () => {
    return (
        <Container>
            <div className="left-column"></div>
            <div className="right-column">
                <h4>Ofertas Limitadas</h4>
                <p>35%  de desconto somente nessa sexta <br />
                    e ganhe um presente especial</p>
            </div>
        </Container>
    );
}

export default DescountBanner;