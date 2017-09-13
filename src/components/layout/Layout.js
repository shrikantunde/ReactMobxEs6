import * as React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Provider, observer } from 'mobx-react';
import RoutingPath  from './../RoutingPath';
import NavBar from './../NavBar';

import AppState from './../../stores/AppStore';

@observer
export default class Layout extends React.Component{
    store

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    componentDidMount() {
      
    }


    render() {
       
        return (
            <Router>
                <Provider store={this.store}>    
                    <div>
                        <NavBar/>
                        <div id='container' className="container">
                            <RoutingPath/>
                        </div>
                    </div>
                </Provider>
            </Router>
        );
    }
} 
