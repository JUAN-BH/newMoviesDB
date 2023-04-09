import React from "react";
import { GitHubIcon } from "../GitHubIcon";
import { LinkedInIcon } from "../LinkedInIcon";
import { PorfolioIcon } from "../PorfolioIcon";

export const Footer = () => {
  return (
    <footer>
      <p>&copy;Juan Becerra</p>
      <div>
        <a href="https://www.juan-bh.com/" target="_blank">
          <PorfolioIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/juan-manuel-becerra-hernandez-11b93b239/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a href="https://github.com/JUAN-BH" target="_blank">
          <GitHubIcon />
        </a>
      </div>
    </footer>
  );
};
