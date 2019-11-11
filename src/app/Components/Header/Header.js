import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    logo = (props) => {
        const logo = props.logo;
        if (logo == "home") {
            return <img src="assets/img/Doc4homeSmall.png"></img>;
        } else {
            return <i className="small material-icons">keyboard_arrow_left</i>;
        }
    }
    menu = (e) => {
        let menu = document.getElementById('headerHomeMenuContent');
        if (e.target.id === 'profileIcon') {
            menu.classList.toggle('menuShow');
        } else {
            menu.classList.remove('menuShow');
        }
    }
    
    touchMove = (e) => {
        // var coordX = 0;
        // var coordY = 0;

        // coordX = e.targetTouches[0].pageX;
        // coordY = e.targetTouches[0].pageY;

        // var touch = e.targetTouches[0];
        // console.log('CoordX' + coordX + ' CoordY' + coordY + ' touchX' + touch.pageX + ' touchY' + touch.pageY);
        // if ((touch.pageX > coordX) && (touch.pageY > coordY - 5) && (touch.pageY < coordY + 5)) {
        //     // let menu = document.getElementById('headerHomeMenuContent');
        //     // menu.classList.remove('menuShow');
        //     console.log('1');
        // }
        // if ((touch.pageX < coordX)) {
        //     // let menu = document.getElementById('headerHomeMenuContent');
        //     // menu.classList.toggle('menuShow');
        //     console.log('2');
        // }else{
        //     console.log('3');
        // }
    }
    // mouse = () => {
    //     var touch = e.targetTouches[0];
    //     if ((touch.pageX > coordX) && (touch.pageY > coordY - 5) && (touch.pageY < coordY + 5)) {
    //         let menu = document.getElementById('headerHomeMenuContent');
    //         menu.classList.remove('menuShow');
    //     }
    //     if ((touch.pageX < coordX)) {
    //         let menu = document.getElementById('headerHomeMenuContent');
    //         menu.classList.toggle('menuShow');
    //     }
    // }
    render() {
        // addEventListener('touchmove', (e) => {
        //     var touch = e.targetTouches[0];
        //     if ((touch.pageX > coordX) && (touch.pageY > coordY - 5) && (touch.pageY < coordY + 5)) {
        //         let menu = document.getElementById('headerHomeMenuContent');
        //         menu.classList.remove('menuShow');
        //     }
        //     if ((touch.pageX < coordX)) {
        //         let menu = document.getElementById('headerHomeMenuContent');
        //         menu.classList.toggle('menuShow');
        //     }
        // });

        // addEventListener('click', (e) => {
        //     let menu = document.getElementById('headerHomeMenuContent');
        //     if (e.target.id === 'profileIcon') {
        //         menu.classList.toggle('menuShow');
        //     } else {
        //         menu.classList.remove('menuShow');
        //     }
        // });
        return (
            <div className="divHeaderHome">
                <header className="headerApp">
                    <div className="headerAppLogo">
                        <Link to={this.props.route}>
                            <span>{this.logo(this.props)}</span>
                        </Link>
                    </div>
                    <div className="headerHomeMenu" id="headerHomeMenuContent">
                        <div className="perfilCustomer">
                            <img src="assets/img/settings.png" width="90px" />
                            <h5>Laura Buendia</h5>
                        </div>
                        <ul>
                            <li className="menuItem">
                                <Link to="/" className="menuEnlace">
                                    Mis pagos
                                </Link>
                            </li>
                            <li className="menuItem">
                                <Link to="/" className="menuEnlace">
                                    Mi historia clínica
                                </Link>
                            </li>
                            <li className="menuItem">
                                <Link to="/" className="menuEnlace">
                                    Agregar Familiar
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="contenedorIcono">
                        <i className="small material-icons" id="profileIcon" onClick={(e) => this.menu(e)}>menu</i>
                    </div>
                </header>
            </div>
        )
    };
}


export default Header;