import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { CookiesProvider } from "react-cookie";
import Job from "./job/Job";
import Admin from "./admin/Admin";
import Business from "./business/Business";

ReactDOM.render(
    <CookiesProvider>
        <React.StrictMode>
            <App />
            <Job />
            <Admin />
            <Business />
        </React.StrictMode>
    </CookiesProvider>,
    document.getElementById("root")
);
