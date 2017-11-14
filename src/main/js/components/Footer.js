import React from "react"
import Link from "./Link";


class Footer extends React.Component {

    render()
    {
        return (
            <div className="footer">
                <hr/>
                <Link className="btn btn-link" href="/">Home</Link>
                <Link className="btn btn-link" href="/another">Another</Link>
                <Link className="btn btn-link" href="/third">Third</Link>
            </div>
        )
    }
}

export default Footer
