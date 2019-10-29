import React, {Component} from 'react';
import { BrowserRouter  as Router, Route, Switch, Link} from 'react-router-dom';

import Home from './Home/Home';
import Ambulance from './Ambulance/Ambulance';
import Doctors from './Doctors/Doctors';
import ListDoc from './Doctors/ListDoc';

class Index extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/ambulance" component={Ambulance} />
                    <Route exact path="/doctors" component={Doctors} />
                    <Route exact path="/doctors/list" component={ListDoc} />
                </Switch>
            </Router>
        )
    }
}

export default Index;