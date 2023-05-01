import styled, { keyframes } from 'styled-components';

const wheelSk = keyframes`
  0%, 50%, 100% { transform: translatey(0) }
  30%, 90% { transform: translatey(-3px) }
`;

const lineDropping = keyframes`
    0% {
    background-position: 100px 11px, 115px 35px, 105px 60px;
    opacity: 1;
  }
  50% { background-position: 0px 11px, 20px 35px, 5px 60px }
  60% { background-position: -30px 11px, 0px 35px, -10px 60px }
  75%, 100% {
    background-position: -30px 11px, -30px 35px, -30px 60px;
    opacity: 0;
  }
  `;

export const LoaderIcon = styled.span`
    position: relative;
    width: 130px;
    height: 100px;
    background-repeat: no-repeat;
    background-image: linear-gradient(#0277bd, #0277bd),
    linear-gradient(#29b6f6, #4fc3f7), linear-gradient(#29b6f6, #4fc3f7);
    background-size: 80px 70px, 30px 50px, 30px 30px;
    background-position: 0 0, 80px 20px, 100px 40px;

    &::before {
        content: "";
        position: absolute;
        right: 100%;
        top: 0px;
        height: 70px;
        width: 70px;
        background-image: linear-gradient(#000 45px, transparent 0),
            linear-gradient(#000 45px, transparent 0),
            linear-gradient(#000 45px, transparent 0);
        background-repeat: no-repeat;
        background-size: 30px 4px;
        background-position: 0px 11px, 8px 35px, 0px 60px;
        animation: ${lineDropping} 0.75s linear infinite;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 10px;
        left: 12px;
        width: 10px;
        height: 10px;
        background: #fff;
        border-radius: 50%;
        box-sizing: content-box;
        border: 10px solid #000;
        box-shadow: 78px 0 0 -10px #fff, 78px 0 #000;
        animation: ${wheelSk} 0.75s ease-in infinite alternate;
    }
`;

export const Container = styled.div`
  position: fixed;
  background: #404eed34;
  bottom: 0;
  z-index: 998;
  height: 100%;
  width: 100%;
  margin: 0;
  opacity: 1;
  display:flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
`;