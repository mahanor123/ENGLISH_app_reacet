import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';


class Verb extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    "title": "1. Auxiliary Verbs: Be, Do, Have",
                    "defination": "These are used to change tenses or to make questions and negative sentences. Many teachers and students call auxiliary verbs “helping verbs” because they help the main verb of a sentence.",
                    "example": "The following examples are :",
                    "sen1": "1.He has already seen the movie.",
                    "sen2": "2.I don't like traveling to cold countries.",
                    "sen3": "3.Are they leaving now?",
                    "verb": "has, don't, Are"
                },
                {
                    "title": "2.Modal Auxiliary Verbs: Can, Will, May, Should",
                    "defination": "These are similar to the auxiliary verbs be, do, and have because they help a main verb in a sentence. They are different because they each have a special meaning.",
                    "example": "In the following examples, may means maybe, can't means impossible or unable, and should is asking for advice:",
                    "sen1": "1.We can't get to the airport in five minutes.",
                    "sen2": "2.It may rain tonight.",
                    "sen3": "3.Should I pay a tip for that in Italy?",
                    "verb": "can't, may, should"
                },
                {
                    "title": "3.Full Verbs: Go, Play, Sing, etc",
                    "defination": "These are all the other verbs in the English language. We can also call these verbs the main verbs of a sentence. It is very important to realize that be, do, and have also have full verb meanings",
                    "example": "In the following sentences, be, do, and have are full verbs and not auxiliary verbs:",
                    "sen1": "1.Do we play basketball tonight?",
                    "sen2": "2.We didn't sing any of my favourite songs.",
                    "sen3": "3.They go to yoga after work.",
                    "verb": "play, sing, go"
                }
            ]
        }
    }
    render() {
        const { data } = this.state
        return (
            <div>
                <NavBar />
                <h1 style={{ textAlign: "center", paddingTop: "20px" }}><b> What is Verb</b> </h1>

                <Card style={{ width: "590px", height: "180px", backgroundColor: "pink", margin: "auto", marginTop: "10px" }}>
                    <CardContent>

                        <Typography component="p">

                            <h3><p><b>VERBS. Verbs have traditionally been defined as words that show action or state of being. Verbs can also sometimes be recognized by their position in a sentence...<br /> For example, the suffixes -ify, -ize, -ate, or -en usually signify that a word is a verb, as in typify, characterize, irrigate, and sweeten.</b></p></h3>
                        </Typography>
                    </CardContent>
                </Card>

                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    <h1><b>Types Of Verb:--</b></h1>
                    <Link to='/test'>
                        <Button variant="contained" color="primary">
                            Start playing with verbs
                </Button>
                    </Link>
                </div>

                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    {
                        data.map((data, index) => {
                            return <Card className="VerbType" key={index}>
                                <CardContent>
                                    <Typography component="p">
                                        <b>{data.title}</b><br /><br />
                                        <p style={{ fontSize: "15px" }}>{data.defination}<br />{data.example}</p>
                                        {data.sen1}< br />
                                        {data.sen2}< br />
                                        {data.sen3}< br /><br />
                                        <b>Verb in the sentene are : {data.verb}</b>
                                    </Typography>

                                </CardContent>
                            </Card>
                        })}
                </div>
                <div >

                </div>

            </div>
        );
    }
}


export default Verb;

