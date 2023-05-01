import React, { useContext, useRef, useState } from 'react';
import {
    Container,
    List,
    ListItem,
    SearchArea,
    IconsArea,
    SearchInput,
    SearchIconsArea,
} from './styles';
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import Dropdown from './Dropdown';
import { CartContext } from '../../contexts/cartContext';

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const searchRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const { token } = useContext(UserContext);
    const { getTotalItemsFromCart } = useContext(CartContext);

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
                    <Link to={'/cart'}>
                        <FiShoppingCart />
                        <span>{getTotalItemsFromCart()}</span>
                    </Link>
                    {token ?
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                            alt=""
                            onClick={() => setVisible(!visible)} /> :
                        <FiUser onClick={() => setVisible(!visible)} />
                    }
                    <Dropdown visible={visible}/>
                </IconsArea>
            </SearchIconsArea>
        </Container>
    );
};

export default Header;
