import styled from 'styled-components';

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
  height:${({ visible }) => visible ? "160px" : "0"};
  opacity:${({ visible }) => visible ? "1" : "0"};
  z-index:${({ visible }) => visible ? "1" : "-2"};
  transition:all .4s ease-in-out;
  box-shadow:0px 5px 4px #0000001a;
  border-radius:5px;

  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  
  h2{
    margin-top:-10px;
    margin-bottom:10px;
    font-size:16px;
    font-weight:600;
  }

  p{
    margin-top:5px;
    font-size:14px;
    color:#616161;
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
    font-size:14px;
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

export const DropdownLogged = styled.div`
  font-family:"Raleway", sans-serif;
  position:absolute;
  background-color:#fff;
  border:1px solid #D9D9D9;
  top:40px;
  right:0;
  padding:20px;
  width:280px;
  overflow: hidden;
  height:${({ visible }) => visible ? "250px" : "0"};
  opacity:${({ visible }) => visible ? "1" : "0"};
  z-index:${({ visible }) => visible ? "1" : "-2"};
  transition:all .4s ease-in-out;
  box-shadow:0px 5px 4px #0000001a;
  border-radius:5px;
  
  h2{
    margin-top:-10px;
    margin-bottom:10px;
    font-size:16px;
    font-weight:600;
    color:#373737;
  }

  p{
    margin-top:5px;
    font-size:14px;
    color:#616161;
  }
`;

export const DropdownTitle = styled.div`
  display:flex;
  gap:15px;
  align-items:center;
  border-bottom:1px solid #c5c5c5;
  padding-bottom:10px;

  img{
    min-width:40px;
    height:40px;
    border-radius:50%;
  }

  h2{
    margin-top:10px;
  }
`;

export const DropdownList = styled.ul`
  
`;

export const DropdownListItem = styled.li`
  display:flex;
  justify-content:space-between;
  align-items:center;
  height:50px;
  margin:3px 0;
  cursor:pointer;
  border-radius:50px;
  transition: background .5s ease;

  span{
    display:flex;
    gap:15px;
  }

  div{
    width:35px;
    height:35px;
    border-radius:50%;
    background-color:#E4E5E9;
    display:flex;
    justify-content: center;
    align-items:center;
  }

  svg{
    font-size:20px;
    color:#4A4B4D;
  }

  p{
    margin-top:11px;
    font-size:14px;
    color:#373737;
    font-weight:500;
  }

  &:hover{
    background-color:#f9fbfc;
  }
`;