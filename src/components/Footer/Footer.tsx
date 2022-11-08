import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import {
  Socials,
  SocialsIconWrapper,
  SocialsItem,
  StyledFooter,
} from "./Footer.styles";

export const Footer = () => {
  const socialsIcon = (svgIcon: JSX.Element, link: string) => {
    return (
      <SocialsItem>
        <SocialsIconWrapper to={link} target="blank">
          {svgIcon}
        </SocialsIconWrapper>
      </SocialsItem>
    );
  };
  return (
    <StyledFooter>
      <Socials>
        {socialsIcon(<FiGithub />, "https://github.com/twikista")}
        {socialsIcon(
          <FaLinkedinIn />,
          "https://www.linkedin.com/in/aaronanama"
        )}
        {socialsIcon(<FaTwitter />, "https://twitter.com/aaronanama")}
      </Socials>
    </StyledFooter>
  );
};
