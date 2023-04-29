import React, { useRef } from 'react';
import { Container, List, ListItem, SearchArea, IconsArea, SearchInput, SearchIconsArea } from './styles';
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const searchRef = useRef(null);

    const handleSearch = (event) => {
        if (event.key === "Enter") {
            const formatedQuery = searchRef.current?.value.replace(" ", "%").toLowerCase();
            navigate(`/products?q=${formatedQuery}`);
        }
    };

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
                    <SearchInput type="text" placeholder='Pesquisar' ref={searchRef} onKeyUp={handleSearch} />
                </SearchArea>
                <IconsArea>
                    <Link to={'/cart'}><FiShoppingCart /></Link>
                    <Link to="/sign-in"><FiUser /></Link>
                </IconsArea>
            </SearchIconsArea>
        </Container>
    );
};

export default Header;
