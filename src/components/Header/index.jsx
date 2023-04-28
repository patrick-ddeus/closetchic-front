import React from 'react';
import { Container, List, ListItem, SearchArea, IconsArea, SearchInput, SearchIconsArea } from './styles';
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const { pathname } = useLocation();

    return (
        <Container active={pathname === "/"}>
            <Link to="/" className="title">ClosetChic</Link>
            <List>
                <ListItem active={pathname === "/products"}>
                    <Link to="/products">
                        Comprar
                    </Link>
                </ListItem>
                <ListItem active={false}>
                    <Link to="/under-construction">
                        Mais Procurados
                    </Link>
                </ListItem>
                <ListItem active={false}>
                    <Link to="/under-construction">
                        Lançamentos
                    </Link>
                </ListItem>
                <ListItem active={false}>
                    <Link to="/under-construction">
                        Marcas
                    </Link>
                </ListItem>
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
