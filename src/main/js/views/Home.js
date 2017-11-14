import React from "react"

class Home extends React.Component {

    render()
    {
        return (
            <div>
                <h1> Home </h1>
                <pre>
                    {
                        JSON.stringify(this.props, null, 4)
                    }
                </pre>

                <a className="btn btn-link" href="/another">Another</a>

            </div>
        )
    }
}

export default Home
