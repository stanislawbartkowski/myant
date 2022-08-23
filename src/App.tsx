import { FC } from "react";
import "antd/dist/antd.css";
import AppLayout from "./restjsonapi/layouts/AppLayout";
import keycloak from "./restjsonapi/ts/keyclock";
import { ReactKeycloakProvider } from "@react-keycloak/web";

const App: FC = () =>
    <AppLayout />

export default App;
