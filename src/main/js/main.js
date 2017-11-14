import evaluateEmbedded from "./util/evaluate-embedded";
import renderView from "./util/render-view";
import History from "./util/history";

import domReady from "domready"

domReady(
    () => {

        const data = evaluateEmbedded("root-data", "x-application/view-data");

        History.init(
            data.viewName,
            window.location.href
        );

        renderView(data)
        .then(
            () => console.log("done")
        );
    }
);
