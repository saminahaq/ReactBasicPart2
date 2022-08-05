import React, { Component } from 'react';

class ClassComponent extends Component {

    constructor(){
        super();
        this.state={
            data: "sami"
        }
    }
    apple(){
        this.setState({data: "samina"})
    }
    render() {
        return (
            <div>
                <h1>This is Component</h1>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.apple()}>class Component</button>
            </div>
        );
    }
}

export default ClassComponent;