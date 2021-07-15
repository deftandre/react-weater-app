import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";

import ErrorBoundary from "error";

ReactDOM.render(
    <ErrorBoundary>{(hasError) => <Root />}</ErrorBoundary>,
    document.getElementById("root")
);
