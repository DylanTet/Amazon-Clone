import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StateProvider } from "./Context/context";
import reducer, { initialState } from "./Context/reducer";
import './index.scss'
import { Auth0Provider } from "@auth0/auth0-react";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Auth0Provider
          domain="dev-aw24h7vl.us.auth0.com"
          clientId="EgyDJDGhaQmjWYNbObzTd3IXiBr5nE4s"
          redirectUri='https://Amazon-Clone-1.dylantet.repl.co'
        >
          <App />
        </Auth0Provider>
      </StateProvider>
    </BrowserRouter>
  </StrictMode>
);