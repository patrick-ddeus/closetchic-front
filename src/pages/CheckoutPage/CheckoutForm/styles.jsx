import styled from 'styled-components';

export const ShippingGroup = styled.div`
  display:flex;
  gap:11px;
`;

export const InputCheckout = styled.input`
  width:386px;
  height:43px;
  border:1px solid #BBBBBB;
  padding:0 16px;
`;

export const PaymentInput = styled.div`
  width:386px;
  height:43px;
  background-color:#F7F7F7;
  display:flex;
  align-items:center;
  padding-left:16px;
  padding-right:16px;
  justify-content: space-between;
  border:1px solid #bdbdbd;

  img{
    width:120px;
  }

  div{
    display:flex;
    gap:18px;
  }
`;

export const PaymentCards = styled.div`
  display:flex;
  gap:11px;
  margin-top:20px;
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
`;