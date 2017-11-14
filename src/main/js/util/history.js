
import fetchView from "./fetch-view"
import renderView from "./render-view"

const History = {
    
    init: function (viewName, url) {

        window.addEventListener("popstate", ev => {

            const data = ev.state;

            //console.log("POP", data);

            fetchView(data.url)
                .then( data => renderView(data));

        }, true);


        this.replace(viewName, url);

    },

    replace: function (viewName, url)
    {
        //console.log("REPLACE", viewName, url);

        window.history.replaceState(
            {
                viewName,
                url
            },
            null,
            url
        );
    },

    newState: function (viewName, url)
    {
        //console.log("PUSH", viewName, url);

        window.history.pushState(
            {
                viewName,
                url
            },
            null,
            url
        );
    }
};

export default History;
