
import React from "react";
class ComponenetDidMount extends React.Component {
    constructor(props) {
        super(props);
        console.warn("Constructor");
        this.state = {
            data: "sa"
        };

    }
componentDidMount() {
    console.warn("componentDidMount");
}
    render() {
        console.warn("render");
        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>{this.setState({data:"samina"})}}>Updated</button>
            </div>
        );
    }
}

export default ComponenetDidMount;