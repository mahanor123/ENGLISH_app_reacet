import React, { Component } from 'react';
import NavBar from './NavBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';


class DataType extends Component {
    constructor() {
        super()
        this.state = {
            data: [{
                "sen": "We ______ get to the airport in five minutes."
            },
            { "sen": "I ______ my homework last night." },
            { "sen": "We ______ sing any of my favourite songs." },
            { "sen": "Do we ______ basketball tonight?" },
            { "sen": "I ______ my homework last night." }
            ]
        }
    }
    render() {
        const { data } = this.state
        return (

            <div>
                <NavBar />

                <h1 style={{ textAlign: "center" }}> </h1>
                <Card style={{ width: "500px", height: "80px", backgroundColor: "#f97863", margin: "auto", marginTop: "10px" }}>
                    <CardContent>

                        <Typography component="p">

                            <h1><b>Start a Exercise</b></h1>
                            <b>Fill with verbs and write your answere in the input fields</b>
                        </Typography>
                    </CardContent>
                </Card>
                <div style={{ paddingLeft: '50px' }}>
                    {data.map((data, index) => {
                        return <ul key={index}>
                            <li><b>{data.sen}</b></li><br />
                            <TextField
                                id="outlined-email-input"
                                className="TextField"
                                label="Your answers"
                                variant="outlined"
                            />
                        </ul>
                    })}
                </div>
                <Link to='/'>
                    <Button variant="contained" color="secondary"
                        secondary style={{ width: "100px", height: "40px", marginTop: "10px", textAlign: "center", marginLeft: "100px" }}>
                        Submit
            </Button>
                </Link>

                <div>



                </div>
            </div>
        );
    }
}

export default DataType;
