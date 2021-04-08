import React from "react";
import { render } from "react-dom";
import { App } from "./component/App/App.component";
import "./fonts/style.css"

const app = <App />;
const here = document.querySelector("#here");

render(app, here);
