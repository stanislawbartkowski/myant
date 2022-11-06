import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import init from "./restjsonapi/ts/init";
import { ConfigProvider } from 'antd';
import plPl from 'antd/lib/locale/pl_PL';
import { setMenuRoute } from "./restjsonapi/ts/leftmenu";
import CustomRouter, { history } from './restjsonapi/ts/CustomRouter'
import { getOrigin, isDev } from "./restjsonapi/ts/j";
import { log } from "./restjsonapi/ts/l";
import { createRoot } from 'react-dom/client';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./restjsonapi/ts/keyclock";

// setHost("http://perseus:8999");
setMenuRoute({ rootredirect: '/customers' })

const hostname: string = isDev() ? 'thinkarek' : getOrigin()[0]

log(isDev() ? `Development hostname ${hostname}` : `Production hostname ${hostname}`)

const container = document.getElementById("root")
const root = createRoot(container!);

init(hostname)
  .then(() =>
    ReactDOM.render(
//    root.render(
      <React.StrictMode>
        <ReactKeycloakProvider authClient={keycloak}>

          <ConfigProvider locale={plPl}>
            <CustomRouter history={history} basename="/" >
              <App />
            </CustomRouter>
          </ConfigProvider>
        </ReactKeycloakProvider>
      </React.StrictMode>,
      document.getElementById("root")
    )
  )
  .catch(() =>
    ReactDOM.render(
      <React.StrictMode>
        <h1> Cannot start the application, probably the network error</h1>
      </React.StrictMode>,
      document.getElementById("root")
    )
  );

/*
init(hostname)
  .then(() =>
    ReactDOM.render(
      <React.StrictMode>
        <ConfigProvider locale={plPl}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ConfigProvider>
      </React.StrictMode>,
      document.getElementById("root")
    )
  )
  .catch(() =>
    ReactDOM.render(
      <React.StrictMode>
        <h1> Cannot start the application, probably the network error</h1>
      </React.StrictMode>,
      document.getElementById("root")
    )
  );
*/

/*
ReactDOM.render(
  <TestItem />,
  document.getElementById("root")
)
*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

