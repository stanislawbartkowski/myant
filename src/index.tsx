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
import { log } from "./restjsonapi/ts/l";
import { createRoot } from 'react-dom/client';

setMenuRoute({ rootredirect: '/customers' })

const container = document.getElementById("root")
const root = createRoot(container!);

init()
  .then(() =>
      root.render(
          <ConfigProvider locale={plPl}>
            <CustomRouter history={history} basename="/" >
              <App />
            </CustomRouter>
          </ConfigProvider>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

