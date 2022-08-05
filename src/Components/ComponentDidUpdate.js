import React from "react";
class ComponentDidUpdate extends React.Component {
    constructor(props) {
        super(props);
        console.warn("constructor");
        this.state = {
            count :0
        };

    }
componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate",this.state.count);
}
    render() {
        console.warn("render");
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>update</button>
            </div>
        );
    }
}



export default ComponentDidUpdate;