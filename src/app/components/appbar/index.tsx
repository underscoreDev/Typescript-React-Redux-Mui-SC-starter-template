import React from "react";
import Box from "@mui/material/Box";
import { css } from "styled-components/macro";

export const appcss = css`
  color: red;
`;

export const AppBar = () => {
  return (
    <Box
      css={`
        color: red;
      `}
    >
      <h1>App Bar</h1>
    </Box>
  );
};
