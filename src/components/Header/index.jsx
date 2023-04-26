import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>ClosetChic</h1>
            <ul>
                <li>Comprar</li>
                <li>Mais Procurados</li>
                <li>Lançamentos</li>
                <li>Marcas</li>
            </ul>
            <div>
                <input type="text" placeholder='Pesquisar' />
            </div>
        </div>
    );
};

export default Header;
