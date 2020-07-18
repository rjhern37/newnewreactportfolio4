
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';




const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
            width: '30ch',
        },
    },
}));

 function Contact() {
    const classes = useStyles();


    return (
        <form className={classes.root} Validate autoComplete="off">

            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>

                            <Typography gutterBottom variant="h5" component="h2">
                                Contact Me
                            </Typography>
                        </Paper>
                    
                    <Grid item md={6} justify="center">

                        <Paper className={classes.paper}>

                            <TextField
                                id="outlined-multiline-flexible"
                                label="Name"
                                type="text"
                                multiline
                                //   value={value}
                                //   onChange={handleChange}
                                variant="outlined"
                            />
                        </Paper>

                        </Grid>

                        <Grid item xs={6}>

                        <Paper className={classes.paper}>

                            <TextField
                                id="outlined-textarea"
                                label="Email"
                                type="email"
                                variant="outlined"
                            />
                        </Paper>

                        </Grid>

                        <Grid item xs={6}>

                        <Paper className={classes.paper}>

                            <TextField
                                id="outlined-multiline-static"
                                label="Message"
                                type="text"
                                multiline
                                rows={4}
                                //   defaultValue="Default Value"
                                variant="outlined"
                            />
                        </Paper>
                        </Grid>
                            <Button 
                                size="large" 
                                color="primary" 
                                fullWidth="true" 
                                variant="contained"
                                endIcon={<SendIcon/>}
                                >
                                Submit
                             </Button>
                    </Grid>
                </Grid>
            </div>
        </form>
    );
}

export default Contact