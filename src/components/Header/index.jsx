import React, { useRef, useState } from 'react';
import {
    Container,
    List,
    ListItem,
    SearchArea,
    IconsArea,
    SearchInput,
    SearchIconsArea,
    DropdownLogin,
    DropdownInput,
    DropdownButton
} from './styles';
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const searchRef = useRef(null);
    const [visible, setVisible] = useState(false);

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
                    {/* <Link to="/sign-in"><FiUser /></Link> */}
                    <FiUser onClick={() => setVisible(!visible)} />
                    <DropdownLogin visible={visible}>
                        <h2>Login</h2>
                        <label>Email</label>
                        <DropdownInput />
                        <label>Senha</label>
                        <DropdownInput />
                        <DropdownButton>
                            Logar
                        </DropdownButton>
                        <div>
                            <Link to={"/sign-up"}>Não possui conta? cadastre-se!</Link>
                        </div>
                    </DropdownLogin>
                </IconsArea>
            </SearchIconsArea>
        </Container>
    );
};

export default Header;
