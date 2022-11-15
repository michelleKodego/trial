function App() {
    return (
      <div className="App">
        <p id="here"></p> 
        <input type="text" id="input"></input>       
        <button className="btn btn-outline-danger" onClick={check}>Hello</button>
                                                
      </div>
    );
  }

  function check(){
    
    let a = document.getElementById("input").value;
    if (a === ""){
      document.getElementById("here").innerHTML = "blank"
      document.getElementById("input").value = ""
        }else if (a !== ""){
      document.getElementById("here").innerHTML = "not blank"
    } 
  
  }
  
  export default App;
  