import styled, { keyframes } from 'styled-components';

const animloader = keyframes`
  0%   { height: 20px} 
  100% { height: 4px}
`;

export const Loader = styled.div`
  width: 8px;
  height: 10px;
  border-radius: 4px;
  display: block;
  margin: 0px auto;
  position: relative;
  background: currentColor;
  color: #FFF;
  box-sizing: border-box;
  animation: ${animloader} 0.3s 0.3s linear infinite alternate;

  &::after, &::before{
    content: '';
    width: 8px;
    height: 10px;
    border-radius: 4px;
    background: currentColor;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    box-sizing: border-box;
    animation: ${animloader} 0.3s  0.45s  linear infinite alternate;
  }

  &::before {
  left: -20px;
  animation-delay: 0s;
}
`;

