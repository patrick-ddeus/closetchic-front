import React from 'react';
import { Container, List, ListItem, SearchArea, IconsArea, SearchInput, SearchIconsArea } from './styles';
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useLocation } from 'react-router-dom';

const Header = () => {
    const { pathname } = useLocation();
    
    return (
        <Container>
            <h1>ClosetChic</h1>
            <List>
                <ListItem active={pathname === "/products"}>Comprar</ListItem>
                <ListItem active={false}>Mais Procurados</ListItem>
                <ListItem active={false}>Lançamentos</ListItem>
                <ListItem active={false}>Marcas</ListItem>
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
