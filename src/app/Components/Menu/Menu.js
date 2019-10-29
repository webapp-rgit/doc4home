import React, {Component} from 'react';

class Menu extends Component{
    render(){
        return(
            <section className="contentMenu">
                <div className="menuFooter">
                    <div className="opcionMenu">
                        <img src={this.props.home} />
                        <span>Home</span>
                    </div>
                    <div className="opcionMenu">
                        <img src={this.props.cita} />
                        <span>Mis citas</span>
                    </div>
                    <div className="opcionMenu">
                        <img src={this.props.farmacia} />
                        <span>Farmacia</span>
                    </div>
                    <div className="opcionMenu">
                        <img src={this.props.examenes} />
                        <span>Mis exámenes</span>
                    </div>
                    <div className="opcionMenu">
                        <img src={this.props.cuenta} />
                        <span>Mi cuenta</span>
                    </div>
                </div>
            </section>
        )
    }
}

export default Menu;