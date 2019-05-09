import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';


class Menu extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Link to='/verb'>
                    <Card className="Tital">
                        <CardContent>
                            <Typography component="p">
                                <img src="image/come.jpg" />
                                <h1><i><b>*Learn verb by playing Game*</b></i></h1>
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
                <div className="img-box">
                    <img src="image/dance.gif" className="picture" />


                    <img src="image/g.jpg" className="picture" />


                    <img src="image/koma.jpg" className="picture" />

                    <img src="image/run.jpg" className="picture" />

                    <img src="image/swiming.jpg" className="picture" />
                </div>

            </div>
        );
    }
}


export default Menu;

