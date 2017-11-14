import React from "react";
import ReactDOM from "react-dom";

import { Promise } from "es6-promise-polyfill"

let currentView;

// see https://webpack.js.org/guides/dependency-management/#context-module-api
const views = require.context("../views/", true, /\.js$/);

/**
 * Renders the view from the given JSON data. We use the react render callback
 * to promise-ify the render process.
 *
 * @param data              JSON data
 * @param data.viewName     view name
 * 
 * @returns {Promise} promise that resolves once the view is done rendering
 */
export default function(data)
{
    const { viewName } = data;

    return new Promise(function (resolve, reject) {

        const ViewComponent = views("./" + viewName + ".js").default;

        let viewElement;
        if (ViewComponent)
        {
            viewElement = <ViewComponent {...data} />;
        }
        else
        {
            viewElement = (
                <div className="text-danger">
                    View "{ data.viewName }" not found
                </div>
            );
        }

        ReactDOM.render(
            viewElement,
            document.getElementById("root"),
            () => {

                currentView = viewName;

                resolve();
            }
        );
    });
}
