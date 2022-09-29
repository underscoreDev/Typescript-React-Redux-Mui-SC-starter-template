import React from "react";
import { css } from "styled-components/macro";

export const landingCss = css`
  color: yellow;
`;

export const LandingLayout = () => {
  return (
    <React.Fragment>
      <h1 css={landingCss}>Landing</h1>
    </React.Fragment>
  );
};
