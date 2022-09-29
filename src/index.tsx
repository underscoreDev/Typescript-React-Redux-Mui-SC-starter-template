/// <reference types="styled-components/cssprop" />

import React from "react";
import { App } from "app";
import { createRoot } from "react-dom/client";
// this import looks unused; it isn't so please do not remove
// eslint-disable-next-line
import type {} from "styled-components/cssprop";
// eslint-disable-next-line

import * as _ from "styled-components/cssprop";
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(<App />);
