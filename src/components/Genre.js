import React, { Component } from 'react';

class Genre extends Component {
    constructor(props) {
        super(props); //ejecuta el constructor de component que es una clase de react
        this.state = {
        };
      }
      render(){
    return(
        
                    <tr>
                      <td>{this.props.item.name}</td>
                      
                  </tr>
                   
    )
}
}
export default Genre;