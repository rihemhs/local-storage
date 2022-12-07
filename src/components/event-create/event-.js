import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import event from "../event-create/event";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <event />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
