import styled from "@emotion/styled";

import { colors } from "./colors";

export const Emoji = styled.div`
  width: 120px;
  height: 120px;
  margin: 15px 15px 40px;
  background: ${colors.base};
  display: inline-block;
  border-radius: 50%;
  position: relative;

  &:after {
    position: absolute;
    bottom: -40px;
    font-size: 18px;
    width: 60px;
    left: calc(50% - 30px);
    color: ${colors.text};
  }
`;
