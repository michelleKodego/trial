// import React from 'react';

// class ClassComp extends React.Component {
//     render(){
//         return(
//             <h1>Sample Class Component method 1</h1>
//         )
//     }
// }

// export default ClassComp;

import React, {Component} from 'react';
const {text,children} = this.props
class ClassComp extends Component {
    render(){
        return(
            <div>
            <h1>{text}</h1>
            {children}
            {children}
            {children}
            </div>
        )
    }
}
export default ClassComp;