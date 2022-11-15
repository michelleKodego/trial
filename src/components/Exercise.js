import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super();
            
            this.state = {key: "Choose Color"}  
    }      
     
     func1() {
        //alert(" Value")
       //this.setState({key:"New Value"});
        this.setState({key:"Red"});
        this.setState({color:"red"});

     }
     func2() {
        //alert(" Value")
       //this.setState({key:"New Value"});
        this.setState({key:"Orange"});
        this.setState({color:"orange"});

     }
     func3() {
        //alert(" Value")
       //this.setState({key:"New Value"});
        this.setState({key:"Yellow"});
        this.setState({color:"yellow"});

     }
     func4() {
      //alert(" Value")
     //this.setState({key:"New Value"});
      this.setState({key:"Green"});
      this.setState({color:"green"});

   }
   func5() {
      //alert(" Value")
     //this.setState({key:"New Value"});
      this.setState({key:"Blue"});
      this.setState({color:"blue"});

   }
   func6() {
      //alert(" Value")
     //this.setState({key:"New Value"});
      this.setState({key:"Violet"});
      this.setState({color:"violet"});

   }
   func7() {
      //alert(" Value")
     //this.setState({key:"New Value"});
      this.setState({key:"Choose Color"});
      this.setState({color:"white"});

   }
    render(){
        return (
        <div className="App" style={{backgroundColor: this.state.color}}>  
        <h1>{this.state.key}</h1>      
        <button onClick={()=>this.func1()}>Red</button>      
        <button onClick={()=>this.func2()}>Orange</button>               
        <button onClick={()=>this.func3()}>Yellow</button>     
        <button onClick={()=>this.func4()}>Green</button>      
        <button onClick={()=>this.func5()}>Blue</button>               
        <button onClick={()=>this.func6()}>Violet</button>          
        <button onClick={()=>this.func7()}>Clear</button>          
        </div>
        
                );
    }
}

export default App;
  