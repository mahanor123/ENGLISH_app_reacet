import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (

            <div className="navbar">
                <AppBar position="static">
                    <right>
                        <Link to='/login'><Button>Login</Button></Link>
                        <Link to='/login'><Button>singup</Button></Link>
                    </right>
                </AppBar>
            </div>
        );
    }
}


export default NavBar; 