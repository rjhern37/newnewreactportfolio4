import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { Link } from '@material-ui/core';


const classes = makeStyles({
    root: {
        maxWidth: 1000,
    },
    media: {
        height: 140,
    },

});


function Projects() {
    return (
        <div className="project-container">
            <div>
                <div className="project-title"></div>
                <Paper className={classes.paper}>

                    <Typography gutterBottom variant="h4" component="h2">
                        My Projects
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                        Hello again!
                        Below is a small sample of some of the projects that I have made over the past six and a half months. Feel free to check them out, and if you have any feed back please feel free to share. 
                        Thanks and enjoy!
                    </Typography>
                </Paper>
                <Card className={classes.root}>
                    <CardMedia title="Portfolio #1" >
                        <img src="https://i.ibb.co/pKKK4s0/Plant-Shot.png" alt="Plant-Shot" border="0" width="100%" />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Plant Mobile
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link href="https://rjhern37.github.io/Plant-Mobile/">
                            <Button size="small" color="primary">
                                Find Food!
                             </Button>
                        </Link>
                        <Link href="https://github.com/rjhern37/Plant-Mobile">
                            <Button size="small" color="primary">
                                Github Repo
                             </Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
            <div>
                <div className="project-title"></div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia title="Portfolio #1" >
                            <img src="https://i.ibb.co/vvx81M7/Coding-Resources-Shot.png" alt="Coding-Resources-Shot" width="100%" />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Coding Resources
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link href="https://coding-resources-312.herokuapp.com/">
                            <Button size="small" color="primary">
                                Get Started!
                             </Button>
                        </Link>
                        <Link href="https://github.com/rjhern37/coding-resources">
                            <Button size="small" color="primary">
                                Github Repo
                             </Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
            <div>
                <div className="project-title"></div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia title="Portfolio #1" >
                            <img src="https://i.ibb.co/0sx5bLW/Directory-Shot.png" alt="Directory-Shot" border="0" width="100%" />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Awesome User Directory
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link href="https://sheltered-basin-68897.herokuapp.com/">
                            <Button size="small" color="primary">
                                Get Started
                             </Button>
                        </Link>
                        <Link href="https://github.com/rjhern37/Awesome-User-Directory2">
                            <Button size="small" color="primary">
                                Github Repo
                             </Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
            <div>
                <div className="project-title"></div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia title="Portfolio #1" >
                            <img src="https://i.ibb.co/m5qmm2B/Note-Taker-Shot.png" alt="Note-Taker-Shot" border="0" width="100%" />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Wonderful Note Taker Express
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link href="https://still-inlet-41032.herokuapp.com/">
                            <Button size="small" color="primary">
                                What ya thinkin?
                             </Button>
                        </Link>
                        <Link href="https://github.com/rjhern37/wonderful-note-taker-express">
                            <Button size="small" color="primary">
                                Github Repo
                             </Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
            <div>
                <div className="project-title"></div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia title="Portfolio #1" >
                            <img src="https://i.ibb.co/1q9fj1z/Fitness-Shot.png" alt="Fitness-Shot" border="0" width="100%" />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Fitness Tracker
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link href="https://fathomless-waters-80814.herokuapp.com/">
                            <Button size="small" color="primary">
                                Get Started!
                             </Button>
                        </Link>
                        <Link href="https://github.com/rjhern37/Fitness-Tracker">
                            <Button size="small" color="primary">
                                Github Repo
                             </Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
            <div>
                <div className="project-title"></div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia title="Portfolio #1" >
                            <img src="https://i.ibb.co/7yMd0JG/Password-Shot.png" alt="Password-Shot" border="0" width="100%" />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Password Generator
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link href="https://rjhern37.github.io/First-password-generator/">
                            <Button size="small" color="primary">
                                Generate Now!
                             </Button>
                        </Link>
                        <Link href="https://github.com/rjhern37/First-password-generator">
                            <Button size="small" color="primary">
                                Github Repo
                             </Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
        </div>


    )
}

export default Projects
