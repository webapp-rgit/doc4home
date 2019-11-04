import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';

class Ambulance extends Component {
    // state = {
    //     message: 'Loading...'
    // }
    // componentDidMount() {
    //     //GET message from server using fetch api
    //     fetch('/api/home')
    //         .then(res => res.text())
    //         .then(res => this.setState({message: res}));
    // }
    // <h4>{this.state.message}</h4>
    google = () => {
        var output = document.getElementById("map");
        if (navigator.geolocation) {
            console.log('BIEN');
        } else {
            error();
        }
        function localizacion(posicion) {
            var latitude = posicion.coords.latitude;
            var longitude = posicion.coords.longitude;

            output.innerHTML = "<iframe src='https://maps.google.com/maps?q=" + latitude + ", " + longitude + "&z=15&output=embed' width='600' height='450' frameborder='0' style='border:0;' allowfullscreen=''></iframe>";

            console.log(latitude + " kaka " + longitude);
        }

        function error() {
            console.log('MAL');
        }

        navigator.geolocation.getCurrentPosition(localizacion, error);
    }
    render() {
        return (
            <div>
                <Header
                    route='/' />
                <section className="ambulance">
                    <h4 className="titleText">Pedir una ambulancia</h4>
                    <div className="row">
                        <div className="col s1"></div>
                        <div className="input-field col s10">
                            <input id="address" type="text" className="validate" />
                            <label htmlFor="address">Dirección</label>
                        </div>
                        <div className="col s1"></div>
                    </div>
                    <div>
                        <a className="btn-app waves-effect waves-light btn-large" onClick={this.google}>Llamar</a>
                    </div>
                    <div id="map"></div>
                </section>
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

export default Ambulance;