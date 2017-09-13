import * as React from 'react';
import { Route, Redirect, Link } from 'react-router-dom'; 

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                       <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Harman React Demo</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to='/'>Home</Link></li>
            <li><Link to='/form'>Form</Link> </li>
            <li><Link to='/table'>Table</Link> </li>
            <li><Link to='/dashboard'>Dashboard</Link> </li>
            <li><Link to='/calendar'>Calendar</Link> </li>
          </ul>
          {/*<ul className="nav navbar-nav navbar-right">
            <li><a href="#"><span className="glyphicon glyphicon-user" /> Sign Up</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-log-in" /> Login</a></li>
          </ul>*/}
        </div>
      </nav> 

            </div>
        );
    }
}
