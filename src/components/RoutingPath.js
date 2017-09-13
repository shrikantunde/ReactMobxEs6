import * as React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import Home from './../components/Home';
import Form from './../components/RegistrationForm';
import Pagination from './../components/pagination/Pagination-Table'

export default class RoutingPath extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/> 
                <Route exact path="/form" component={Form}/>
                <Route exact path="/table" component={Pagination}/> 
            </div>
        );
    }
}
