// cc:application base#;application providers
import { Provider } from "react-redux";
import React, { ReactNode } from "react";
import { store } from "app/redux/store/store";
import { GlobalStyles } from "app/theme/globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
// this import looks unused; it isn't so please do not remove
// eslint-disable-next-line
import type {} from "styled-components/cssprop";
// eslint-disable-next-line
import * as _ from "styled-components/cssprop";

interface ProviderProps {
  children?: ReactNode;
}

const Providers = (props: ProviderProps) => (
  <Provider store={store}>
    <GlobalStyles />
    <Router>{props.children}</Router>
  </Provider>
);

export default Providers;
