import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import {
  Socials,
  SocialsLink,
  SocialsItem,
  StyledFooter,
} from "./Footer.styles";

export const Footer = () => {
  const socialsIcon = (svgIcon: JSX.Element, link: string) => {
    return (
      <SocialsItem>
        <SocialsLink rel="external" href={link} target="blank">
          {svgIcon}
        </SocialsLink>
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
