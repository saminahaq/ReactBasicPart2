import React, { Component } from 'react';
class Student_props_class extends Component {
constructor(){
    super();
    
    this.state={
        name :"sa"
    }
}
    render() {
        return (
            <div>
                Student class component
                <h1>{this.state.name}</h1>
               <button onClick={()=>this.setState({name: this.props.name})}>updated</button>
            </div>
        );
    }
}



export default Student_props_class;