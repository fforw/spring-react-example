import "whatwg-fetch"

export default function(uri)
{
    return fetch(
        uri, {
        headers: {
            "x-requested-With" : "whatwg-fetch"
        }
    })
    .then( response => response.json() );

}
