import styled from 'styled-components';
import "@fontsource/righteous";
import "@fontsource/raleway";


export const Container = styled.header`
  margin:23px 0 46px;
  padding:10px 40px 30px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:1px solid #f0f0f0;

  .title{
    font-family:"Righteous", sans-serif;
    font-weight: 400;
    font-size:40px;
    color:black;
    position:relative;
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
`;

export const SearchIconsArea = styled.div`
  display:flex;
  align-items: center;
  gap:60px;
`;

export const IconsArea = styled.div`
  display:flex;
  gap:15px;
  font-size:20px;
  position:relative;

  svg{
    cursor:pointer;
    color:#7A7A7A;
  }
`;

export const DropdownLogin = styled.div`
  font-family:"Raleway", sans-serif;
  position:absolute;
  background-color:#fff;
  border:1px solid #D9D9D9;
  top:40px;
  right:0;
  padding:20px;
  width:280px;
  overflow: hidden;
  height:${({ visible }) => visible ? "220px" : "0"};
  opacity:${({ visible }) => visible ? "1" : "0"};
  z-index:${({ visible }) => visible ? "1" : "-2"};
  transition:all .4s ease-in-out;

  h2{
    margin-top:-5px;
    font-size:16px;
    font-weight:600;
  }

  label{
    font-size:13px;
    color:#616161;
    margin-bottom:5px;
    display:inline-block;
  }

  div{
    text-align:center;
  }

  a{
    font-size:13px;
    color:#616161;
    display:inline-block;
  }
`;

export const DropdownInput = styled.input`
  background-color:#F9F9F9;
  border:1px solid #D9D9D9;
  height:30px;
  padding:0 10px;
  width:100%;
`;

export const DropdownButton = styled.button`
  width:100%;
  height:30px;
  background-color:#1C232C;
  cursor:pointer;
  color:white;
  border:0;
  margin-top:10px;
  font-family:"Raleway";
  font-weight: 500;
  font-size:14px;
`;