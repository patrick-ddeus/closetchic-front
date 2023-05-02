import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
`;

export const ShippingGroup = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:11px;

  input{
    width:100%;
  }

  @media (max-width: 1200px) {
    display:grid;
    grid-template-columns: 1fr;
    }
`;

export const InputCheckout = styled.input`
  width:386px;
  height:43px;
  border:1px solid #BBBBBB;
  padding:0 16px;
  outline:0;
  ${({ isInvalid }) => isInvalid && `
    background-color: #F9DDD8;
  `}

  @media (max-width: 1200px) {
    width:100%;
  }
`;

export const PaymentInput = styled.div`
  width:100%;
  height:43px;
  background-color:#F7F7F7;
  display:flex;
  align-items:center;
  font-size:14px;
  font-weight:600;
  padding-left:16px;
  padding-right:16px;
  justify-content: space-between;
  border:1px solid #bdbdbd;

  &:nth-child(2){
    img{
      width:90px;
    }
  }

  img{
    width:120px;
  }

  div{
    display:flex;
    gap:18px;
  }

  @media (max-width: 1200px) {
    width:100%;
  }

  @media screen and (max-width:900px){
    max-width:100%;
    width:100%;
  }
`;

export const PaymentCards = styled.div`
  display:flex;
  justify-content: center;
  gap:11px;
  margin-top:20px;

  @media (max-width: 1200px) {
    width:100%;
    
  }

  @media screen and (max-width:900px){
    flex-wrap:wrap;
  }
`;

export const Divisor = styled.div`
  padding:18px 21px;
  background-color:#fff;

  & + &{
    margin-top:20px;
  }

  label{
    margin-top:11px;
    font-size:11px;
    color:#616161;
    display:block;
  }

  .address-group{
    display:grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap:11px;
    margin-top:17px;

    input{
        width:100%;
        max-width:782px;
    }

    @media (max-width: 1200px) {
      display:grid;
      grid-template-columns: 1fr;

      input{
        max-width:100%;
      }
    }
  }

  .city-group{
    display:grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap:11px;
    max-width:782px;

    div{
      input{
        width:100%;
      }
    }

    @media (max-width: 1200px) {
      display:grid;
      grid-template-columns: 1fr;
      max-width:100%;
    }
  }

  .cell-group{
    input{
        width:172px;
    }
  }
`;