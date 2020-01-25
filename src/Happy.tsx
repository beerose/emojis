import * as React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

import { Emoji } from "./Emoji";
import { colors } from "./colors";

const mouthAnimation = keyframes`
	25% {transform: rotate(-12deg);}
  50% {transform: rotate(12deg);}
	75% {transform: rotate(-12deg);}
`;

const HappyStyled = styled(Emoji)`
  position: relative;
  &:hover {
    animation: ${mouthAnimation} 0.8s ease-in infinite;
  }

  .eyebrows {
    left: calc(50% - 3px);
    top: 30px;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: transparent;

    &:before,
    &:after {
      width: 26px;
      height: 13px;
      border-radius: 60px 60px 0 0;
      background: transparent;
      border: 5px solid black;
      box-sizing: border-box;
      border-bottom: 0;
      bottom: 75px;
      left: calc(50% - 13px);
    }

    &:before {
      margin-left: -21px;
    }

    &:after {
      margin-left: 21px;
    }

    &:before,
    &:after {
      position: absolute;
      content: "";
    }
  }

  .blush {
    &:before {
      width: 6px;
      height: 6px;
      background: transparent;
      border-radius: 50%;
      bottom: -64px;
      left: 58px;
      box-shadow: -35px -2px 25px 10px ${colors.angry},
        35px -2px 25px 10px ${colors.angry};
    }
    position: absolute;

    &:before,
    &:after {
      position: absolute;
      content: "";
    }
  }

  .mouth {
    position: absolute;
    top: 60px;
    background: transparent;
    left: 50%;

    &:after {
      width: 60px;
      height: 80px;
      left: calc(50% - 30px);
      top: -50px;
      border-radius: 50%;
      background: transparent;
      border: 5px solid ${colors.black};
      box-sizing: border-box;
      border-top-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
      z-index: 1;
    }

    &:before,
    &:after {
      position: absolute;
      content: "";
    }
  }
`;

export const Happy = () => (
  <HappyStyled>
    <div className="eyebrows" />
    <div className="mouth" />
    <div className="blush" />
  </HappyStyled>
);
