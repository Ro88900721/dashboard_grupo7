import React, { Component } from "react";

class LastProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lastProduct: []
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.apiCall("http://localhost:3030/api/products/lastProduct", this.lastProduct);
    }

    lastProduct = (data) => {
        this.setState({
            id: data.data[0].libro_id,
            name: data.data[0].libro_titulo,
            description: data.data[0].libro_autor,
            image: data.data[0].libro_imagen,
            price: data.data[0].libro_precio,
        })
    }

    render() {
        let url = "http://localhost:3030/images/portadas/" + this.state.image;
        let urldatail = "http://localhost:3030/products/" + this.state.id;
        return (
          <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                  <div className="card-header py-3">
                      <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto Subido: {this.state.name} </h5>
                  </div>
                  <div className="card-body">
                      <div className="text-center">
                          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={url} alt="Ultimo producto"/>
                      </div>
                      <span>Nombre del libro</span><p>{this.state.name}</p>
                      <span>Precio </span><p>${this.state.price}</p>
                      <a className="btn btn-danger" target="_blank" rel="nofollow" href={urldatail}>Ver detalles del Libro</a>
                  </div>
              </div>
          </div>
        );
    }
};

export default LastProduct;