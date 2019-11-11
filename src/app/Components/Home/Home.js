import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Menu from '../Menu/Menu';
import Header from '../Header/Header';

class Home extends Component {
    onSwipeStart(e) {
        console.log('start swiping', e);
    }
    onSwipeMove(position, event) {
        console.log(`Moved ${position.x} pixels horizontally`, event);
        console.log(`Moved ${position.y} pixels vertically`, event);
    }

    onSwipeEnd(event) {
        console.log('End swiping...', event);
    }
    name = () => {
        return "Prueba";
        // let user = firebase.auth().currentUser;
        // if(user){
        //     let name = firebase.auth().currentUser.displayName;
        //     return name;
        // }else{
        //     return this.props.username;
        // }
    }
    photo = () => {
        return "assets/img/settings.png";
        // let user = firebase.auth().currentUser;
        // if(user){
        //     let urlPhoto = firebase.auth().currentUser.photoURL;
        //     return urlPhoto;
        // }else{
        //     return "img/settings.png";
        // }
    }
    render() {
        return (
            <div>
                <Header
                    logo="home"
                    route="#" />
                <section className="profileHome">
                    <div className="imgProfile">
                        <img src={this.photo()} />
                    </div>
                    <div className="textProfile">
                        <p>
                            <span>{this.name()}</span>
                            <br />
                            <span>Edad: 25 años</span>
                            <br />
                            <span>Barranquilla - Colombia</span>
                        </p>
                    </div>
                </section>
                <div className="welcomeProfile">
                    <p className="titleText">Bienvenido!</p>
                    <p className="textBody">¿Qué deseas hacer hoy?</p>
                </div>
                <div className="contentActivities">
                    <Link to="/ambulance">
                        <div className="activitiesHome">
                            <img src="assets/img/home/Ambulance.png" className="mt15px" />
                            <br />
                            <span>Pedir Ambulancia</span>
                        </div>
                    </Link>
                    <Link to="/doctors">
                        <div className="activitiesHome">
                            <img src="assets/img/home/Doctors.png" />
                            <br />
                            <span>Médicos disponibles</span>
                        </div>
                    </Link>
                    <Link to="#">
                        <div className="activitiesHome">
                        <img src="assets/img/home/Alerts.png" className="ml15" />
                            <br />
                            <span>Notificaciones</span>
                        </div>
                    </Link>
                    <Link to="#">
                        <div className="activitiesHome">
                        <img src="assets/img/home/Blog.png" />
                            <br />
                            <span>Blog</span>
                        </div>
                    </Link>
                    {/* <a onClick={() => firebase.auth().signOut()}>Sign out</a> */}
                </div>
                <Menu
                    home="assets/img/menu/HomeActive.png"
                    cita="assets/img/menu/Citas.png"
                    farmacia="assets/img/menu/Farmacia.png"
                    examenes="assets/img/menu/Examenes.png"
                    cuenta="assets/img/menu/Cuenta.png" />
            </div>
        )
    }
}

export default Home;