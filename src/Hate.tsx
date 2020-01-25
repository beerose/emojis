import * as React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

import { Emoji } from "./Emoji";
import { colors } from "./colors";

const faceAnimation = keyframes`
  35%, 60% {transform: translateX(0) translateY(10px) scale(0.9);}
  40%, 50% {transform: translateX(-5px) translateY(10px) scale(0.9);}
  45%, 55% {transform: translateX(5px) translateY(10px) scale(0.9);}
`;

const mouthAnimation = keyframes`
  25%, 50% {height: 8px; bottom: 25px;}
`;

const HateStyled = styled(Emoji)`
  background: linear-gradient(${colors.angry} -10%, ${colors.base});
  background-size: 100%;

  &:hover {
    .face {
      animation: ${faceAnimation} 1.5s ease-in infinite;
    }
    .mouth {
      animation: ${mouthAnimation} 1.5s ease-in infinite;
    }
  }

  .face {
    &:before,
    &:after {
      position: absolute;
      content: "";
    }
  }

  .eyebrows {
    left: calc(50% - 3px);
    top: 55px;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: transparent;

    &:before,
    &:after {
      width: 50px;
      height: 20px;
      border: 5px solid ${colors.black};
      box-sizing: border-box;
      border-radius: 50%;
      border-top-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
      top: -3px;
      left: calc(50% - 25px);
    }

    &:before {
      margin-left: -25px;
      transform: rotate(15deg);
    }

    &:after {
      margin-left: 25px;
      transform: rotate(-15deg);
    }

    position: absolute;

    &:before,
    &:after {
      position: absolute;
      content: "";
    }
  }

  .eyes {
    width: 12px;
    height: 12px;
    left: calc(50% - 6px);
    top: 70px;
    border-radius: 50%;
    background: transparent;
    box-shadow: 25px 0 0 0 ${colors.black}, -25px 0 0 0 ${colors.black};

    position: absolute;

    &:before,
    &:after {
      position: absolute;
      content: "";
    }
  }

  .mouth {
    width: 36px;
    height: 14px;
    left: calc(50% - 18px);
    top: 95px;
    background: ${colors.black};
    border-radius: 50%;

    position: absolute;

    &:before,
    &:after {
      position: absolute;
      content: "";
    }
  }
`;

export const Hate = () => (
  <HateStyled>
    <div className="face">
      <div className="eyebrows" />
      <div className="eyes" />
      <div className="mouth" />
    </div>
  </HateStyled>
);
