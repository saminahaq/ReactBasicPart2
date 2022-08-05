import React from "react";

class RenderClass extends React.Component {
    constructor(props) {
        super(props);
console.log(props);
        this.state = {
            data: "samina"
        };

    }

    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
            </div>
        );
    }
}

RenderClass.propTypes = {

};

export default RenderClass;