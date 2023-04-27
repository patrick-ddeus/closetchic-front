import React from 'react';
import { Container, List, SearchArea, IconsArea, SearchInput, SearchIconsArea } from './styles';
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser } from "react-icons/fi";

const Header = () => {
    return (
        <Container>
            <h1>ClosetChic</h1>
            <List>
                <li>Comprar</li>
                <li>Mais Procurados</li>
                <li>Lançamentos</li>
                <li>Marcas</li>
            </List>
            <SearchIconsArea>
                <SearchArea>
                    <div>
                        <IoSearchOutline />
                    </div>
                    <SearchInput type="text" placeholder='Pesquisar' />
                </SearchArea>
                <IconsArea>
                    <FiShoppingCart />
                    <FiUser />
                </IconsArea>
            </SearchIconsArea>
        </Container>
    );
};

export default Header;
