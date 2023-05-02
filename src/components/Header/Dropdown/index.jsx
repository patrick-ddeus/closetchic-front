import React, { useContext } from 'react';
import { IoLogOut, IoBagHandle, IoChevronForwardOutline, IoPerson } from "react-icons/io5";
import {
    DropdownLogin,
    DropdownLogged,
    DropdownTitle,
    DropdownList,
    DropdownListItem,
} from './styles';

import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/userContext';

const Dropdown = ({ visible }) => {
    const { token, name } = useContext(UserContext);
    const navigate = useNavigate()
    return <>
        {!token ? (
            <DropdownLogin visible={visible}>
                <h2>Você precisa estar logado!</h2>
                <Link to={"/sign-in"}>Faça login</Link>
                <p>ou</p>
                <div>
                    <Link to={"/sign-up"}>Não possui uma conta? cadastre-se!</Link>
                </div>
            </DropdownLogin>
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

                    <DropdownListItem onClick={() => navigate('/my-orders')}>
                        <span>
                            <div>
                                <IoBagHandle />
                            </div>
                            <p>Meus Pedidos</p>
                        </span>
                        <IoChevronForwardOutline />
                    </DropdownListItem>

                    <DropdownListItem onClick={() => {
                        localStorage.removeItem("userinfo");
                        window.location.reload();
                    }}>
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
    </>;
};

export default Dropdown;