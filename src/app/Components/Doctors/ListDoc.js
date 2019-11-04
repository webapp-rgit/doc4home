import React, { Component } from 'react';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';

class ListDoc extends Component {
    render(){
        return(
            <div>
                <Header 
                    route='/doctors' />
                <section className="ListDoc">
                    <h4 className="titleText">Ver médicos disponibles</h4>
                    <div className="disponible_Nodispobible">
                        <p>Disponible<i className="iconDisponible"></i></p>
                        <p>No disponible<i className="iconNoDisponible"></i></p>
                    </div>
                </section>
                
                <Menu 
                    home="../assets/img/menu/HomeActive.png"
                    cita="../assets/img/menu/Citas.png"
                    farmacia="../assets/img/menu/Farmacia.png"
                    examenes="../assets/img/menu/Examenes.png"
                    cuenta="../assets/img/menu/Cuenta.png" />
            </div>
        );
    }
}

export default ListDoc;