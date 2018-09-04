import React from "react";
import { Div, Img, A } from "glamorous";
import ash1 from "../../../Images/ash1.png";
import colours from "../../../constants/Colours";
import EntryTemplate from "../EntryTemplate";

const ArtPortfolioContent = () => (
  <Div>
    <Div textAlign="center" width="100%" fontSize={20}>
      Ashleigh Williams Art Portfolio (In progress)
    </Div>
    <Div padding={20}>
      Ashliegh is a performance artist based in London and required a website to
      display some of her work.
      <br /> She provided the design and content for the website, which I then
      built into the site{" "}
      <A href="http://ashleighwilliams.co.uk/" color={colours.purple}>
        ASHLEIGH WILLIAMS
      </A>
    </Div>
  </Div>
);

const toolsText = `Tools used included React, React-router, Glamarous, and it is hosted as a
static site from an S3 bucket.`;

const ArtPortfolio = () => (
  <EntryTemplate
    image={ash1}
    Content={ArtPortfolioContent}
    toolsText={toolsText}
    link="http://ashleighwilliams.co.uk/"
  />
);
export default ArtPortfolio;
