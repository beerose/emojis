import * as React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

import { Emoji } from "./Emoji";
import { colors } from "./colors";

const animation = keyframes`
	25% {transform: scale(1.1);}
	75% {transform: scale(0.6);}
`;

const LoveStyled = styled(Emoji)`
  background: ${colors.love};

  &:hover > .heart {
    animation: ${animation} 1s linear infinite alternate;
  }

  .heart {
    left: calc(50% - 40px);
    top: calc(50% - 35px);
    width: 80px;
    height: 80px;

    &:before,
    &:after {
      left: calc(50% - 20px);
      top: calc(50% - 32px);
      width: 40px;
      height: 64px;
      background: ${colors.white};
      border-radius: 20px 20px 0 0;
    }

    &:before {
      transform: translate(20px) rotate(-45deg);
      transform-origin: 0 100%;
    }

    &:after {
      transform: translate(-20px) rotate(45deg);
      transform-origin: 100% 100%;
    }

    position: absolute;

    &:before,
    &:after {
      position: absolute;
      content: "";
    }
  }
`;

export const Love = () => (
  <LoveStyled>
    <div className="heart" />
  </LoveStyled>
);
