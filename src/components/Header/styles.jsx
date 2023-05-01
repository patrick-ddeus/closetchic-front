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
    cursor:pointer;
  }
`;

