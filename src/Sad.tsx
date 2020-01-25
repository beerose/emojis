/** @jsx jsx */
import styled from "@emotion/styled";
import { keyframes, css, jsx } from "@emotion/core";

import { Emoji } from "./Emoji";
import { colors } from "./colors";

// based on 😍

const eyesAnimation = keyframes`
  5%, 25%, 50% {transform: scaleY(1.0); }
  15%, 45% {transform: scaleY(0); }
	80% {transform: scaleY(1.2); }
`;

const faceAnimation = keyframes`
	50% { transform: translateY(15px); }
`;

const leftEyebrowAnimation = keyframes`
	50% { transform: rotate(-10deg); }
`;

const rightEyebrowAnimation = keyframes`
	50% { transform: rotate(10deg); }
`;

const mouthAnimation = keyframes`
	50% { transform: scale(0.7) }
`;

const tearAnimation = keyframes`
  5% { display: visible };
  100% { transform: translateY(50px) rotate(45deg);  }
`;

const Tear = styled.div`
  position: absolute;
  /* display: none; */
  left: calc(50% - 40px);
  top: calc(50%);

  background: ${colors.like};
  width: 20px;
  height: 20px;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);

  z-index: 1;
  animation: ${tearAnimation} 1.5s ease-in infinite;
`;

const Mouth = styled.div`
  position: absolute;
  box-sizing: border-box;

  width: 60px;
  height: 40px;
  left: calc(50% - 30px);
  top: calc(50% + 20px);

  border-radius: 50%;
  background: transparent;
  border: 5px solid ${colors.black};
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;

  animation: ${mouthAnimation} 1.5s ease-in-out infinite;
`;

const Eye = styled.div`
  position: absolute;
  top: calc(50% - 15px);

  width: 15px;
  height: 15px;

  background: ${colors.black};
  border-radius: 50%;

  animation: ${eyesAnimation} 1.5s linear infinite;
`;

const leftEyeStyles = css`
  left: calc(50% - 30px);
`;

const rightEyeStyles = css`
  right: calc(50% - 30px);
`;

const SadStyled = styled(Emoji)`
  background: ${colors.base};

  > div:first-child {
    animation: ${faceAnimation} 1.5s ease-in-out infinite;
  }
`;

const Eyebrow = styled.div`
  position: absolute;
  box-sizing: border-box;

  width: 30px;
  height: 30px;
  top: calc(50% - 25px);

  border-radius: 50%;
  border: 4px solid ${colors.black};
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
`;

const leftEyebrow = css`
  transform: rotate(-30deg);
  left: calc(50% - 40px);
  animation: ${leftEyebrowAnimation} 1.5s ease-in-out infinite;
`;

const rightEyebrow = css`
  transform: rotate(30deg);
  right: calc(50% - 40px);
  animation: ${rightEyebrowAnimation} 1.5s ease-in-out infinite;
`;

const Face = styled.div`
  width: 100%;
  height: 100%;
`;

export const Sad = () => (
  <SadStyled>
    <Face>
      <Eyebrow css={leftEyebrow} />
      <Eyebrow css={rightEyebrow} />
      <Eye css={leftEyeStyles} />
      <Eye css={rightEyeStyles} />
    </Face>
    <Tear />
    <Mouth />
  </SadStyled>
);
