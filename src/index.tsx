import * as React from "react";
import { render } from "react-dom";
import styled from "@emotion/styled";

import { Love } from "./Love";
import { Hate } from "./Hate";
import { Happy } from "./Happy";

type Reaction = {
  emoji: string;
  name: string;
  count: number;
};
const reactions: Reaction[] = [
  { name: "love", emoji: "😍", count: 2 },
  { name: "like", emoji: "😊", count: 0 },
  { name: "neutral", emoji: "🙃", count: 20 },
  { name: "dislike", emoji: "😕", count: 1 },
  { name: "hate", emoji: "😡", count: 10 }
];

const ReactionsRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

function App() {
  return (
    <ReactionsRow>
      <Love />
      <Hate />
      <Happy />
    </ReactionsRow>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
