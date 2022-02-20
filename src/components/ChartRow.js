import React, { Component } from 'react';

class ChartRow extends Component {
    constructor(props) {
        super(props); //ejecuta el constructor de component que es una clase de react
        this.state = {
        };
      }
      render() {
          return (
                  <tr>
                      <td>{this.props.item.id}</td>
                      <td>{this.props.item.titulo}</td>
                      <td>{this.props.item.editorial}</td>
                      <td>${this.props.item.precio}</td>
                      <td>{this.props.item.stock}</td>
                  </tr>
              )
      }
    }

export default ChartRow;