import React from "react";
import { Div, B } from "glamorous";

const MySummary = ({ titleSize, fontSize, textAlign }) => (
  <Div fontSize={fontSize} flex="0 0 70%" maxWidth={500} textAlign={textAlign}>
    <B fontSize={titleSize} lineHeight={2}>
      Sam Pennington
    </B>
    <br />I am a junior software developer based in London, primarily I have
    worked on the front end of web applications using React, though I have had
    some exposure to Node.js.
    <br />I am currently looking for my next Junior Development role, and I am
    also happy to discuss any freelance jobs.
  </Div>
);

export default MySummary;
