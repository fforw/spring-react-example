import fetchView from "../util/fetch-view"
import renderView from "../util/render-view"
import History from "../util/history"

export default function (url)
{
    return fetchView(url)
        .then( data => {

            History.newState(data.viewName, url);
            
            renderView(data)
        });


}
