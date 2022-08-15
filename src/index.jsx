import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StateProvider } from "./Context/context";
import reducer, { initialState } from "./Context/reducer";
import './index.scss'

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </StrictMode>
);