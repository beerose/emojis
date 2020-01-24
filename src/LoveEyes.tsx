/** @jsx jsx */
import styled from "@emotion/styled";
import { keyframes, css, jsx } from "@emotion/core";

import { Emoji } from "./Emoji";
import { colors } from "./colors";

// based on 😍

const eyesAnimation = keyframes`
	25% {transform: scale(1.1)}
	75% {transform: scale(0.6);}
`;

const mouthAnimation = keyframes`
  25% {transform: scaleX(1.0); }
	70% {transform: scaleX(0.5); }
`;

const Heart = styled.div`
  width: 30px;
  height: 30px;

  top: calc(50% - 30px);

  &:before,
  &:after {
    width: 20px;
    height: 32px;
    background: ${colors.white};
    border-radius: 20px 20px 0 0;
  }

  &:before {
    background: ${colors.love};
    transform: translate(10px) rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    background: ${colors.love};
    transform: translate(-10px) rotate(45deg);
    transform-origin: 100% 100%;
  }

  position: absolute;

  &:before,
  &:after {
    position: absolute;
    content: "";
    left: 5px;
  }
`;

const leftHeart = css`
  left: calc(50% - 40px);
`;

const rightHeart = css`
  right: calc(20px);
`;

const LoveStyled = styled(Emoji)`
  background: ${colors.base};

  &:hover {
    > .heart {
      animation: ${eyesAnimation} 0.8s linear infinite;
    }
    > .mouth {
      animation: ${mouthAnimation} 1s ease-out infinite;
    }
  }

  .mouth {
    position: absolute;
    background: ${colors.black};

    left: calc(50% - 20px);
    top: calc(50% + 20px);

    width: 40px;
    height: 20px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
`;

export const LoveEyes = () => (
  <LoveStyled>
    <Heart className="heart" css={leftHeart} />
    <Heart className="heart" css={rightHeart} />
    <div className="mouth" />
  </LoveStyled>
);
