import React from "react";
class shouldComponentUpdate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count:0
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate")
       if (this.state.count>5) {
        return true;
       } else {
        return false;
       }
    }
    render() {
        return (
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>Updated</button>
        </div>
        );
    }
}



export default shouldComponentUpdate;