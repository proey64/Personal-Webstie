import React from "react";
import { Div, Ul, Li, B } from "glamorous";

const Sgs = () => (
  <Div>
    I spent 2 years studying for my A levels in Steyning, West Sussex.
    <Ul width={80}>
      <Li>
        Maths: <B float="right">A</B>
      </Li>
      <Li>
        Physics:
        <B float="right">A</B>
      </Li>
      <Li>
        Cehmistry:
        <B float="right">A</B>
      </Li>
    </Ul>
  </Div>
);

export default Sgs;
