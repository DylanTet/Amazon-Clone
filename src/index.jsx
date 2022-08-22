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

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID

root.render(
  <StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Auth0Provider
          domain={domain}
          clientId={clientID}
          redirectUri="http://localhost:3000/"
        >
          <App />
        </Auth0Provider>
      </StateProvider>
    </BrowserRouter>
  </StrictMode>
);