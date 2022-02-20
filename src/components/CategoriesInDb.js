import React, { Component } from "react";
import Genre  from './Genre';

class GenresInDb extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            generos: []
        };
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then((response)=> response.json())
            .then((data) => consecuencia(data))
            .catch((e)=> console.log(e))
    }

    componentDidMount() {
        this.apiCall("http://localhost:3030/api/products/generos", this.generos);
    }
    generos = (data) => {
        this.setState({
            generos: data.data
        })
    }

    render() {
        return ( 
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Géneros</h6>
                        </div>
                        <div className="card-body colorFondo">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                          <thead>
                                              <tr>
                                                  
                                                  
                                                  <th>Nombre de género</th>
                                                  
                                              </tr>
                                          </thead>
                                          <tbody>
                                              {this.state.generos.map((genero) => {return <Genre item= {genero}/>})}
                                          </tbody>
                                      </table>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
         );
    }
}

export default GenresInDb;

