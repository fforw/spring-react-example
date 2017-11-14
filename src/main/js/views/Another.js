import React from "react"

class Another extends React.Component {

    render()
    {
        return (
            <div>
                <h1> Another View </h1>
                <pre>
                    {
                        JSON.stringify(this.props, null, 4)
                    }
                </pre>
            </div>
        )
    }
}

export default Another
