import styled from 'styled-components';
import "@fontsource/righteous";
import "@fontsource/raleway";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:170px;

  @media (max-width: 1100px) {
    display:none;
  }
`;

export const HamburguerButton = styled.button`
  display: none;
`;

export const Container = styled.header`
  margin:23px 0 46px;
  padding:10px 40px 30px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:1px solid #f0f0f0;
  position:relative;

  .title{
    font-family:"Righteous", sans-serif;
    font-weight: 400;
    font-size:40px;
    color:black;
    position:relative;
  }

  @media screen and (max-width:1100px){
    nav{
      order: 1;
    }
    div{
      order: 0;
    }

    button{
      order:2;
    }
  }

  @media screen and (max-width:600px){
    justify-content:center;
    text-align:center;
  }
`;

export const List = styled.ul`
  display:flex;
  gap:30px;

`;

export const ListItem = styled.li`
    transition: transform .15s ease;
    position: relative;
    cursor:pointer;

    &:hover::after {
        width: 80%;
    }
    &::after {
        content: "";
        display: block;
        width: ${({ active }) => active ? `80%` : "0"};
        height: 2px;
        position: absolute;
        background-color: #1C232C;
        left: 2px;
        transition: width .3s ease-in-out;
    }
    &:hover{
        transform: scale(1.08);
    }

    a{
      color:black;
    }
   
`;

export const SearchArea = styled.div`
  
  height:41px;
  display:flex;
  align-items: center;
  
  background-color:#F9FBFC;
  padding-left:10px;
  border-radius:9px;

  div{
    min-width:30px;
    margin-top:5px;
  }

  svg{
    font-size:20px;
    color:#AFAFAF;
  }

  
`;

export const SearchInput = styled.input`
    border:0;
    background-color:transparent;
    height:100%;
    outline:0;
    width:70px;
    transition:width .5s ease;

    &:focus{
      width:199px;
    }

    @media screen and (max-width:1100px){
      margin-right:50px;

      &:focus{
      width:139px;
    }
    }
`;

export const SearchIconsArea = styled.div`
  display:flex;
  align-items: center;
  gap:60px;

  @media screen and (max-width:640px){
    display:none;
  }
`;

export const IconsArea = styled.div`
  display:flex;
  align-items:center;
  gap:15px;
  font-size:20px;
  position:relative;

  svg{
    cursor:pointer;
    color:#7A7A7A;
  }

  img{
    width:28px;
    cursor:pointer;
    margin-bottom:5px;
  }

  a span{
    width:20px;
    height:20px;
    background-color:#00D373;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#1c232c;
    font-weight:600;
    position:absolute;
    top:10px;
    left:-10px;
    text-align:center;
    border-radius:50%;
    font-size:12px;
  }
`;

