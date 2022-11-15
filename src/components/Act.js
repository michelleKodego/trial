import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super();
            this.state = {key: "Choose Color"}  
    }      
     
     func1() {
        //alert(" Value")
       //this.setState({key:"New Value"});
        this.setState({name:"Green"});
        this.setState({color:"green"});

     }
     func2() {
        //alert(" Value")
       //this.setState({key:"New Value"});
        this.setState({name:"Red"});
        this.setState({color:"red"});

     }
     func3() {
        //alert(" Value")
       //this.setState({key:"New Value"});
        this.setState({name:"Yellow"});
        this.setState({color:"yellow"});

     }
    render(){
        return (
        <div className="App" style={{backgroundColor: this.state.color}}>  
        <h1>{this.state.key}</h1>      
        <button onClick={()=>this.func1()}>Green</button>      
        <button onClick={()=>this.func2()}>Red</button>               
        <button onClick={()=>this.func3()}>Yellow</button>               

        </div>
        
                );
    }
}

export default App;
  