import React from "react";
import { Div, Img } from "glamorous";
import colours from "../constants/Colours";
import me from "../Images/sam.png";
import StyledText from "./StyledText";

const Me = ({ makeMeFlip, deg, displayMe }) => (
  <Div
    width={200}
    height={200}
    position="relative"
    userSelect="none"
    flex="0 0 auto"
  >
    <Img
      src={me}
      width={200}
      borderRadius="50%"
      boxShadow={`3px 3px 50px -10px ${colours.header}`}
      margin={32}
      marginTop={0}
      marginLeft="auto"
      opacity={1}
      transition="all .4s"
      cursor="pointer"
      position="absolute"
      onClick={makeMeFlip}
      transform={`rotateY(${deg}deg)`}
      css={{
        ":hover": {
          opacity: 0.8
        }
      }}
    />
    <Div
      width={200}
      height={200}
      position="absolute"
      backgroundColor={colours.header}
      color={colours.white}
      borderRadius="50%"
      boxShadow={`3px 3px 50px -10px ${colours.header}`}
      margin={32}
      marginTop={0}
      marginLeft="auto"
      opacity={1}
      transition="all .4s"
      zIndex={displayMe ? -1 : 1}
      cursor="pointer"
      onClick={makeMeFlip}
      transform={`rotateY(${deg + 180}deg)`}
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize={32}
    >
      <StyledText>Me!</StyledText>
    </Div>
  </Div>
);

export default Me;
