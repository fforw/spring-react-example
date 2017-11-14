/**
 * Evaluate the JSON data embedded into a custom typed script block
 *
 * @param elemId        id of the script element
 * @param mediaType     custom media type 
 */
export default function(elemId, mediaType)
{
    let elem = document.getElementById(elemId);
    if (!elem || elem.getAttribute("type") !== mediaType)
    {
        throw new Error("#" + elemId + " is not a script of type '" + mediaType + "': " + elem);
    }

    return JSON.parse(elem.innerHTML);
}
