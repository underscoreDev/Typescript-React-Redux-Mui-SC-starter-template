// cc:application base#;application index
import React from "react";
import Providers from "app/Providers";
import { MainRoutes } from "app/Routes";
import { AppBar } from "app/components/appbar";
// this import looks unused; it isn't so please do not remove
// eslint-disable-next-line
import type {} from "styled-components/cssprop";
// eslint-disable-next-line

import * as _ from "styled-components/cssprop";

export const App = (props: any) => (
  <Providers>
    <AppBar {...props} />
    <MainRoutes />
  </Providers>
);
