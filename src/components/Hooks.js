// import {useState} from 'react';

// function Hooks (){
//     let [varName, setVarName] = useState ("Initial Value"); //Yes, ako pa rin 'to! T
//     function abc(){
//         //3.) Ternary operator
//         //(condition) ? (command if satisfied) : (command if not satisfied);
//             // (varName === "Initial Value") ? (setVarName (varName = "Yes, ako pa rin 'to! T")) : (setVarName (varName = "Iba na! T"));
//             //2.) 
//             if (varName === "Initial Value"){
//                 setVarName (varName = "Yes, ako pa rin 'to!");
//             }else if (varName === "Yes, ako pa rin 'to!"){
//                 setVarName (varName = "Iba na!");
//             }else{
//                 setVarName (varName = "Initial Value");

//             }  

//         //1.) setVarName (varName = "New Value");

//     }
//     return(
//        <div>
//             <h1>{varName}</h1>
//             <button onClick={abc}>Change</button>
//        </div>
//     )
// }

// export default Hooks;

function DesPF(propsname){
    const {name, age} = propsname;
    return(
        <div>
            Name:<h1>{name}</h1>
            Age:<h2>{age}</h2>
        </div>
    )
}

export default DesPF;