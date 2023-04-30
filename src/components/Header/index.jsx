import React, { useContext, useRef, useState } from 'react';
import {
    Container,
    List,
    ListItem,
    SearchArea,
    IconsArea,
    SearchInput,
    SearchIconsArea,
    DropdownLogin as Dropdown,
    DropdownLogged,
    DropdownTitle,
    DropdownList,
    DropdownListItem,
} from './styles';
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { IoLogOut, IoBagHandle, IoChevronForwardOutline, IoPerson } from "react-icons/io5";

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const searchRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const { token, name } = useContext(UserContext);

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
                    {token ?
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                            alt=""
                            onClick={() => setVisible(!visible)} /> :
                        <FiUser onClick={() => setVisible(!visible)} />
                    }
                    {!token ? (
                        <Dropdown visible={visible}>
                            <h2>Você precisa estar logado!</h2>
                            <Link to={"/sign-in"}>Faça login</Link>
                            <p>ou</p>
                            <div>
                                <Link to={"/sign-up"}>Não possui uma conta? cadastre-se!</Link>
                            </div>
                        </Dropdown>
                    ) : (
                        <DropdownLogged visible={visible}>
                            <DropdownTitle>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                                    alt="" />
                                <h2>{name}</h2>
                            </DropdownTitle>
                            <DropdownList>
                                <DropdownListItem>
                                    <span>
                                        <div>
                                            <IoPerson />
                                        </div>
                                        <p>Editar Perfil</p>
                                    </span>
                                    <IoChevronForwardOutline />
                                </DropdownListItem>

                                <DropdownListItem>
                                    <span>
                                        <div>
                                            <IoBagHandle />
                                        </div>
                                        <p>Meus Pedidos</p>
                                    </span>
                                    <IoChevronForwardOutline />
                                </DropdownListItem>

                                <DropdownListItem>
                                    <span>
                                        <div>
                                            <IoLogOut />
                                        </div>
                                        <p>Logout</p>
                                    </span>
                                    <IoChevronForwardOutline />
                                </DropdownListItem>
                            </DropdownList>
                        </DropdownLogged>
                    )}

                </IconsArea>
            </SearchIconsArea>
        </Container>
    );
};

export default Header;
