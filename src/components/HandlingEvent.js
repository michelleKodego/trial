//fucntion component

// function Event(){
//     function Okay(){
//         alert("Goods - Function!");
//     }
//     return(
//         <div>
//         <h1>Hello</h1>  
//         <button onClick={Okay}>Click me!</button>
//         </div>
//     )
// }

// export default Event;

// import React  from 'react';

// class Event extends React.Component {
//      Okay(){
//         //alert("Goods - Class!");
//      document.getElementById("here").innerHTML = "Goods - Class!";
//             }
//     render(){
//         return(
//             <div>
//                 <h1 id="here">Hello</h1>  
//                 <button onClick={this.Okay}>Click me!</button>
                                    
//                 </div>
//         )
//     }
// }

//utilization os state()
import React  from 'react';

class Event extends React.Component {
    constructor(){
        super();
        this.state = {key: "Hello"}
        this.state = {name: "Choose color"}
        //this.state = ({number: 0});
        
    }

     Okay(){
        //alert("Goods - Class!");
        //this.setState({key: "Goods - Class!"});
       // this.setState({number: this.state.number+1})
        this.setState ({name: "HelloGreen"})
        this.setState ({color: "green"})
      }
    render(){
        return(
            <div style={{backgroundColor:this.state.color}}>
                <h1 id="here">{this.state.key}</h1>  
                <button onClick={()=>this.Okay()}>{this.state.name}</button>
                                    
                </div>
        )
    }
}

export default Event;
