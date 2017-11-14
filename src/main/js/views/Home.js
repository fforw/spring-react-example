import React from "react"
import Footer from "../components/Footer";

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

                <Footer/>

            </div>
        )
    }
}

export default Home
