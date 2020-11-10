import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-rotuer-dom";
import Footer from "./Footer";

describe("Footer component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
