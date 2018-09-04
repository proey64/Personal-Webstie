import React from "react";
import { Div, A } from "glamorous";
import personalSite from "../../../Images/personalsite.png";
import links from "../../../constants/links";
import colours from "../../../constants/Colours";

import EntryTemplate from "../EntryTemplate";

const samuelPenningtonContent = () => (
  <Div>
    <Div textAlign="center" width="100%" fontSize={20}>
      Personal Site
    </Div>
    <Div padding={20}>
      After leaving my most recent job, I realised I have little work online I
      was actually able to show to anyone, so I have decided to make a portfolio
      type site to show what Im working on, be it a freelance job or a personal
      project I have set out on.
    </Div>
    <Div padding={20}>
      The code for this site is freely accesible on my{" "}
      <A color={colours.purple} href={links.githubProject}>
        Github
      </A>{" "}
      feel free to take a look.
    </Div>
  </Div>
);

const toolsText = `Tools used to build this portfolio site so far include React, React-Router, 
Webpack, HTML, CSS.`;

const ArtPortfolio = () => (
  <EntryTemplate
    image={personalSite}
    Content={samuelPenningtonContent}
    toolsText={toolsText}
  />
);
export default ArtPortfolio;
