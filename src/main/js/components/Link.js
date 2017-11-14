import React from "react"

import navigateTo from "../util/navigate-to"

/**
 * Special link component that fetches the new view via fetch and renders the received JSON data as new view
 */
class Link extends React.Component {

    onClick = ev => {

        ev.preventDefault();
        navigateTo(ev.target.href);
    };

    render()
    {
        const { href, className, children } = this.props;

        return (
            <a
                className={ className }
                href={ href }
                onClick={ this.onClick }
            >
                {
                    children
                }
            </a>
        );
    }
}

export default Link
