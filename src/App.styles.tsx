import styled, { keyframes } from "styled-components";
import backgroundImage from "./images/background.png";

const fadeSlideUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(4rem);
    }
    100% {
        opacity: 1;
        transform: none;
    }
`;

const pulse = keyframes`
    0% {
        opacity: 1;
        transform: none;
    }
    50% {
        opacity: 0.8;
        transform: scale(0.8);
    }
    100% {
        opacity: 1;
        transform: none;
    }
`;

export const AppWrapper = styled.div`
  width: 100%;
  height: 5000px;
  margin: 0;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BodyWrapper = styled.div`
  margin: auto;
  width: 60%;
`;

export const WelcomeMessage = styled.div`
  font-family: "Consolas";
  font-size: 3em;
  color: #433633;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DownChevronWrapper = styled.div`
  position: absolute;
  bottom: 4vh;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;

  img {
    animation: ${fadeSlideUp} 1s 1s ease-out forwards, ${pulse} 2s 3s ease-out infinite;
    opacity: 0;
  }
`;
