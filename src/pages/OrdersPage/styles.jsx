import styled from 'styled-components';
import "@fontsource/raleway"

export const Container = styled.div`

height:100%;

  main{
    padding-top:-30px;
    padding:0 72px;
  }

  h2{
    font-family:"Raleway", sans-serif;
    font-size:30px;
    margin-bottom:40px;
  }
`;

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    /* height: 400px; */
    margin: auto;

    td{
        text-align: left;
        padding: 8px;
        
    }

    th, td{
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 20px;
    }

    th {
        text-align: left;
        background-color:#FCFCFC;
        text-transform:uppercase;
    }

    tr{
        border-top: 1px solid #ddd;
        height: 40px;
        &:first-child {
            border: 0;
        }
    }

    tr td:nth-child(1){
        color:#573a51;
    }

    tr td:nth-child(2){
        text-transform: capitalize;
    }

    tr td:nth-child(3){
        color:#00a058;
    }

    tr td button{
        padding:6px 18px;
        background-color:#60646C;
        border:0;
        color:white;
        cursor:pointer;
    }
`;