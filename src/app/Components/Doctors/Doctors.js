import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../Menu/Menu';
import Header from '../Header/Header';

import Prueba from './Prueba';

class Doctors extends Component {
    render() {
        return (
            <div>
                <Header 
                    route='/'/>
                <section className="ambulance">
                    <h4 className="titleText">Ver médicos disponibles</h4>
                    <div className="row">
                        <div className="col s1"></div>
                        <div className="col s10 selectApp">
                            <label>Tipo de médico</label>
                            <select className="browser-default">
                                <option value="">Escoge una opción</option>
                                <option value="1">Médico Especialista</option>
                                <option value="2">Médico General</option>
                            </select>
                        </div>
                        <div className="col s1"></div>
                    </div>
                    <div>
                    <Link to="/doctors/list">
                        <span className="btn-app waves-effect waves-light btn-large">Buscar médicos disponibles</span>
                    </Link>
                    </div>
                </section>
                <Prueba />
                <Menu 
                    home="assets/img/menu/HomeActive.png"
                    cita="assets/img/menu/Citas.png"
                    farmacia="assets/img/menu/Farmacia.png"
                    examenes="assets/img/menu/Examenes.png"
                    cuenta="assets/img/menu/Cuenta.png" />
            </div>
        );
    }
}


export default Doctors;