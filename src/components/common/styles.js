import styled, { keyframes } from 'styled-components';

// NewTag
export const NewSpan = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 52px;
  height: 22px;
  background-color: #0094ff;
  padding 4px 14px;
  color: #fff;
  border-radius: 42px;

  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
`;

// Button
export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  
  min-width: 62px;
  height: 27px;
  padding 5px 17px;
  margin: 0 4px;
  border-radius: 62px;
  background: #d9d9d9;

  color: #000;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  &.active {
    background: #000;
    color: #fff;
  }
`;

// Loading Car
const dotFlashing = keyframes`
  0% {
    background-color: #2e2e2e;
  }
  50%,
  100% {
    background-color: transparent;
  }
`;
const shake = keyframes`
  0% {
    transform: translateY(-1%);
  }
  100% {
    transform: translateY(3%);
  }
`;
const line = keyframes`
  0% {
    stroke-dashoffset: 22;
  }
  25% {
    stroke-dashoffset: 22;
  }
  50% {
    stroke-dashoffset: 0;
  }
  51% {
    stroke-dashoffset: 0;
  }
  80% {
    stroke-dashoffset: -22;
  }
  100% {
    stroke-dashoffset: -22;
  }
`;
export const FlashingDot = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #2e2e2e;
  color: #2e2e2e;
  animation: ${dotFlashing} 1s infinite linear alternate;
  animation-delay: 0.5s;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &::before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #2e2e2e;
    color: #2e2e2e;
    animation: ${dotFlashing} 1s infinite alternate;
    animation-delay: 0s;
  }

  &::after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #2e2e2e;
    color: #2e2e2e;
    animation: ${dotFlashing} 1s infinite alternate;
    animation-delay: 1s;
  }
`;

export const SpinnerWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(46, 46, 46, 0.42);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  span {
    margin: 10% 0 7% 0;
  }

  @media (min-width: 450px) {
    max-width: 450px;
    max-height: 800px;
  }
`;
export const Car = styled.svg`
  margin-right: 6%;
  .car__body {
    animation: ${shake} 0.2s ease-in-out infinite alternate;
  }

  .car__line {
    transform-origin: center right;
    stroke-dasharray: 22;
    animation: ${line} 0.8s ease-in-out infinite;
    animation-fill-mode: both;

    car__line--top {
      animation-delay: 0s;
    }

    car__line--middle {
      animation-delay: 0.2s;
    }

    car__line--bottom {
      animation-delay: 0.4s;
    }
  }
`;
