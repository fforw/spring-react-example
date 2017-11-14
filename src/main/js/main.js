import React from "react";
import { render } from "react-dom";
import evaluateEmbedded from "./util/evaluate-embedded";

import domReady from "domready"

// see https://webpack.js.org/guides/dependency-management/#context-module-api
const views = require.context("./views/", true, /\.js$/);

domReady(
    () => {
        console.log("ready");

        const data = evaluateEmbedded("root-data", "x-application/view-data");

        const ViewComponent = views("./" + data.viewName + ".js").default;

        console.log({ViewComponent});

        render(
            ViewComponent ? <ViewComponent {...data} /> :
                <div className="text-danger">View {data.viewName} not found</div>,
            document.getElementById("root")
        );
    }
);
