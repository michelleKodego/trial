function App() {
  function check(){
   alert("ok 1");
    } 
  
    return (
      <div className="App">
           
        <button className="btn btn-outline-danger" onClick={check}>Hello</button>
                                                
      </div>
    );
  }

// import React, {Component} from 'react';

// class App extends Component {
//      check(){
//             alert("ok");
      
//       }
//     render(){
//         return (
//         <div className="App">                       
//         <button className="btn btn-outline-danger" onClick={this.check}>Hello</button>                                                           
//         </div>
//                 );
//     }
// }
  
// import React, {Component} from 'react';

// class App extends Component {
//     constructor(){
//         super();
//             //this.state = {key: "Value"} 
//             this.state = {key: 0} 
//     }      
     
//      change() {
//         //alert(" Value")
//        //this.setState({key:"New Value"});
//         this.setState({key: this.state.key+5});
//      }
//     render(){
//         return (
//         <div className="App">  
//         <h1>{this.state.key}</h1>      
//         <button onClick={()=>this.change()}>Apply Change</button>               
//         </div>
        
//                 );
//     }
// }

// import React, {useState} from 'react';
// function App() {
//        //let data = "Value"
//        let [data, setData] = useState("Value 1")
//         function update(){
//             setData ("New Value")
//             // data ="New Value"
//             // alert(data);
//         }
//         return (
//           <div className="App">
//                <h1>{data}</h1>
//             <button className="btn btn-outline-danger" onClick={update}>Hello</button>
                                                    
//           </div>
//         );
//       }

  export default App;
  