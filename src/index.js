import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.js";
import AppTest from "./main2.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppTest />
  </StrictMode>
);
