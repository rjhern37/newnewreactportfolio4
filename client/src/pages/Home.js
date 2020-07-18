import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const classes = makeStyles({
    root: {
        maxWidth: 200,
    },
    media: {
        height: 300,
        width: 300,
    },

});



function Home() {
    return (
        <div>
            <div className="home-container">

                <Card className={classes.root}>

                    <Typography gutterBottom variant="h2" component="h2">
                        Hello, I'm Ray and welcome to my portfolio!
                        </Typography>
                    <CardMedia title="Portfolio #1" className="profile-pic" >
                        <img src="https://i.ibb.co/kcLTv9w/Profile-Shot.jpg" alt="Profile-Shot" border="0" height="25%" width="75%" />
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            I am a Full-Stack (MERN) web developer with a background in Business Management.
                            I earned a Full-Stack Development Certificate at Northwestern University and tackle projects and unexpected developments with a strategic business mindset.
                            I am comfortable working independently or in a team, in high paced work environments and excel at meeting deadlines and producing real results. Feel free to check out my resume located at 
                            the bottom of this page. 
                            If you have any comments or suggestions head over to my contact page and shoot me a message!
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            In my off time I enjoy playing sports, hiking with my weird pups (pictured above), trying out new restaurants, and laughing it up with my friends.
                            One thing I also love to do it learn about new and exciting things. Whether it be traveling and learning about new cultures,
                            or surfing the web through the thousands of Docs trying to become a master coder.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link href="https://drive.google.com/file/d/1InlcYAz9iraghni4Aesu8wrojgXbzqFf/view?usp=sharing">
                            <Button size="small" color="primary">
                                Rays Resume
                             </Button>
                        </Link>
                    </CardActions>
                </Card>

            </div>

        </div>
    )
}

export default Home
