import styled from 'styled-components';
import "@fontsource/righteous";

export const Container = styled.header`
  margin:23px 0 26px;
  padding:0 72px;
  width:100%;
  display:flex;
  justify-content: space-between;
  align-items: center;

  h1{
    font-family:"Righteous", sans-serif;
    font-weight: 400;
    font-size:40px;
  }
`;


export const List = styled.ul`
  display:flex;
  gap:14px;

  li{
    cursor:pointer;
  }
`;

export const SearchArea = styled.div`
  width:199px;
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

  svg{
    cursor:pointer;
    color:#7A7A7A;
  }
`;