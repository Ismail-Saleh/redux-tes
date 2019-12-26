import React, { Component } from 'react';
import { Grid, Box, Link, IconButton, Button, Typography, Avatar } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { Search, MoreHoriz, Facebook, Twitter, Bookmark } from '@material-ui/icons';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    purple: {
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
    img: {
        [theme.breakpoints.down('sm')]: {
            maxWidth: '20%',
            padding: 0, margin: 0
        }
    },
    category: {
        backgroundColor: '#f2f2f2',
        padding: '10px',
        margin: '10px',
        fontSize: '12px',
        radius: '4px'
    },
    medsos: {
        display: 'flex',
        listStyle: 'none',
        marginLeft: '10%'
    },
    bigAvatar: {
        width: 60,
        height: 60
    }
});






class Follow extends Component {

    constructor(){
        super();
        this.state=({
            buttonText: 'Follow'
        });
    }

    Unfollow= ()=>{
        this.setState({
            buttonText :'Unfollow'
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container >
                    <Grid ><div className={classes.category}><Link to='' style={{ color: '#A6A6A6' }}>Books</Link></div></Grid>
                    <Grid ><div className={classes.category}><Link to='' style={{ color: '#A6A6A6' }}>Self Improvement</Link></div></Grid>
                    <Grid ><div className={classes.category}><Link to='' style={{ color: '#A6A6A6' }}>Productivity</Link></div></Grid>
                    <Grid ><div className={classes.category}><Link to='' style={{ color: '#A6A6A6' }}>Life</Link></div></Grid>
                    <Grid ><div className={classes.category}><Link to='' style={{ color: '#A6A6A6' }}>Life Lesson</Link></div></Grid>
                </Grid>

                <Grid container >
                    <Grid md={2} container
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <Link to='' className={classes.img}>
                            <img src='https://img.pngio.com/applause-clap-clapping-clapping-hands-emoji-hand-hand-png-of-clapping-hands-512_512.png' style={{ maxWidth: '44%', border: '1px solid #9e9e9e', borderRadius: '100px', marginLeft: '30px' }} />
                        </Link>

                    </Grid>

                    <Grid md={6} container direction='column' alignItems='flex-start' nowrap>
                        <Typography variant="caption" component="p" style={{ paddingTop: '15px' }} >
                            <Link To=''>
                                <a href=''>54K Apluse</a>
                            </Link>
                        </ Typography>
                        <Typography variant="caption" component="p" color="textSecondary"  >
                            <Link To=''>
                                <a href=''>Applause from you and other 45,000</a>
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid md={3}>
                        <div>
                            <ol className={classes.medsos}>
                                <li style={{paddingRight:'8px'}}><a href=''><Facebook /></a></li>
                                <li><a href=''><Twitter /></a></li>
                                <li style={{paddingLeft:'8px'}}><a href=''><Bookmark /></a></li>
                                <li style={{paddingLeft:'8px'}}><a href=''><MoreHoriz /></a></li>
                            </ol>
                        </div>
                    </Grid>
                </Grid><hr style={{ border: '1px solid #e5e5e5' }} />
                <Grid container>
                    <Grid md={12} container
                        direction="row"
                        justify="center"
                        alignItems="center">

                        <Grid md={1}><Avatar alt="Remy Sharp" src="https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg" className={classes.bigAvatar} /></Grid>
                        <Grid md={7}>
                            <Typography variant='overline' color='textSecondary' style={{ padding: 'none' }}>written by</Typography>
                            <h2>Ryan Holiday</h2>
                            <Typography variant='p' color='textSecondary'>
                                Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The Obstacle Is The Way’ http://amzn.to/24qKRWR
                                </Typography>

                        </Grid>
                        <Grid md={3} justify='center' container>
                            <Button size='small' variant="outlined" color="primary" style={{ fontSize: '10px' }} onClick={this.Unfollow}>
                            {this.state.buttonText}
                            </Button>
                        </Grid>

                    </Grid>


                    <Grid md={12} container
                        direction="row"
                        justify="center"
                        alignItems="center">

                        <Grid md={1}><Avatar alt="Remy Sharp" src="https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg" className={classes.bigAvatar} /></Grid>
                        <Grid md={7}>
                            <Typography variant='overline' color='textSecondary' style={{ padding: 'none' }}>written by</Typography>
                            <h2>Ryan Holiday</h2>
                            <Typography variant='p' color='textSecondary'>
                                Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The Obstacle Is The Way’ http://amzn.to/24qKRWR
                                </Typography>

                        </Grid>
                        <Grid md={3} justify='center' container>
                            <Button size='small' variant="outlined" color="primary" style={{ fontSize: '10px' }}>
                            {this.state.buttonText}
                            </Button>
                        </Grid>

                    </Grid>
                </Grid><hr style={{ border: '1px solid #e5e5e5' }} />
                
                <Grid md={12} container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        style={{marginBottom:'40px'}}
                >
                <Link>
                    <Button style={{width:'900px'}} variant="outlined">See Response (18)</Button>
                </Link>

                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Follow);