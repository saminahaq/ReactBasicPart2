import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data : "sam"
        };

    }
    render() {
        return (
            <div>
                <h1>Hello {this.state.data}</h1>
            </div>
        );
    }
}



export default Form;