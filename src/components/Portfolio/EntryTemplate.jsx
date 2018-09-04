import React from "react";
import { Div, Img } from "glamorous";

const EntryTemplate = ({ image, Content, toolsText }) => (
  <Div
    justifyContent="center"
    padding={30}
    alignItems="center"
    display="flex"
    flexWrap="wrap"
    lineHeight={1.5}
  >
    <Div flex="1 1 35%" minWdith={300} maxWidth={500}>
      <Content />
      <Div padding={20}>{toolsText}</Div>
    </Div>
    <Div flex="1 1 55%" padding={40}>
      <Img width="100%" src={image} borderRadius={6} />
    </Div>
  </Div>
);

export default EntryTemplate;
