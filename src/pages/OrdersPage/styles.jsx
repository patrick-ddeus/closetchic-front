import styled from 'styled-components';

export const Container = styled.div`
  main{
    padding-top:-30px;
    padding:0 72px;
  }
`;

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    /* height: 400px; */
    margin: auto;

    td{
        text-align: center;
        padding: 8px;
        
    }

    th {
        padding: 20px;
        text-align: center;
    }

    tr{
        border-top: 1px solid #ddd;
        height: 160px;
        &:first-child {
            border: 0;
        }
    }
`;