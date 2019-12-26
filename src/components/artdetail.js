import React, { Component } from 'react';
import Nav from './navbar/nav'
import { withStyles } from '@material-ui/core/styles';
import { Avatar, IconButton, Grid, Button, Toolbar, AppBar, Box, Link, Tab, Container, Typography } from '@material-ui/core/';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { Search, NotificationsNone,Facebook,Twitter,Bookmark } from '@material-ui/icons';
import Navbar from './navbar/nav'
import Follow from './follow'
import Related from './relatedArticle'

const styles = theme => ({
    root: {
        flexGrow: 1,
        
    },
    brand: {
        textAlign: "left",
        fontFamily: 'Times New Roman,Times, serif',
        fontSize: '29px',
        fontWeight: '800'
    },
    bold:{
        fontSize:24,
        fontWeight:700,
        color:'black',
    },
    purple: {
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
    paragraf:{
    fontSize:22,
    lineHeight:'200%' ,
    paddingTop: '30px', 
    textAlign:'justify', 
    fontFamily:'edium-content-serif-font, Georgia, Cambria, "Times New Roman", Times, serif',
    [theme.breakpoints.down('sm')]: {
        fontSize:14
    }
    }
});

class ArtDetail extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>

                <Container>
                    <div className={classes.root}>
                        <AppBar position="static" style={{ background: '#fff', color: '#000', boxShadow: 'none' }}>
                            <Toolbar>
                                <div style={{ width: '100%' }}>
                                    <Box display="flex" p={1} >
                                        <Box p={1} flexGrow={1} className={classes.brand}>
                                            Medium
                                        </Box>
                                        <Box p={1}>
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <NotificationsNone />
                                            </IconButton>
                                        </Box>

                                        <Box p={1}>
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <Search />
                                            </IconButton>
                                        </Box>
                                        <Box p={1}>
                                            <Avatar className={classes.purple}>OP</Avatar>
                                        </Box>
                                    </Box>
                                </div>
                            </Toolbar>
                        </AppBar>
                    </div>
                </Container>
                <Navbar />
                <Container>
                    <Grid container md={12} style={{ marginTop: '30px' }}>

                        <img src='https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg' style={{ maxWidth: '100%' }} />

                    </Grid>

                    <Grid container direction='row' justify="center"
                        alignItems="center">
                        <Grid md={8} style={{ paddingTop: '30px' }}>

                            <div>
                                <Typography variant='caption' component='p' align='center'>
                                    <a href=''>Books</a>
                                </Typography>
                                <Typography variant='h4' component='p' align='center'>
                                    If You Only Read A Few Books In 2018, Read These
                            </Typography>

                            </div>

                        </Grid>
                    </Grid>
                    <Grid container justify="center"
                        alignItems="center">

                        <Grid md={8} style={{ paddingTop: '30px' }}>

                            <Box display='flex' direction='row'>

                                <Box alignItems='center' style={{paddingTop:'10px'}}>
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <Avatar alt="Remy Sharp" src="https://miro.medium.com/fit/c/96/96/0*oxw8NBp_Td0n3l4_.png" className={classes.large} />
                                    </IconButton>

                                </Box>
                                <Box flexGrow={1}>
                                    <Box display='flex' flexDirection='column'>
                                        <Box>

                                            <div style={{ marginTop: 20 }}>
                                                <Typography variant="caption" component="p" noWrap>Ryan Holiday <Button size='small' variant="outlined" color="primary" style={{fontSize:'10px'}}>
                                                Follow
                                                </Button>
                                                </Typography>
                                                <Typography variant="caption" component="p" color="textSecondary" noWrap>
                                                    <time>Jan 21</time>
                                                    <span className={classes.doticon}></span>
                                                    <span>6 min read</span>
                                                </Typography>
                                            </div>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box style={{paddingTop:20}}>
                                            <Box display='flex'>
                                                    <Box>
                                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                                            <Facebook/>
                                                        </IconButton>
                                                    </Box>
                                                    <Box>
                                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                                            <Twitter/>
                                                        </IconButton>
                                                    </Box>
                                                    <Box>
                                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                                            <Bookmark/>
                                                        </IconButton>
                                                    </Box>
                                            </Box>
                                
                                </Box>
                            </Box>

                        </Grid>

                        <Grid md={8} className={classes.paragraf}>
                
                            <Typography variant='p' content='p'>
                            If you’d liked <Link To=''>to be jerked around less</Link>, provoked less, and <Link to=''>more productive and inwardly focused</Link>, where should you start?<br/>
                            </Typography>

                            <Typography variant='p' content='p'>
                            To me, the answer is obvious: by turning to wisdom. Below is a list of 21 books that will help lead you to a better, stronger 2018.<br/>
                            <Link to=''className={classes.bold}>Deep Work: Rules for Focused Success in a Distracted World by Cal Newport</Link> Media consumption went way up in 2017. For most of us, that meant happiness and productivity went way down. The world is becoming noisier and will become more so every day. If you can’t cultivate the ability to have quiet, insightful, deeply focused periods of productive work, you’re going to get screwed. This is a book that explains how to cultivate and protect that skill — the ability to do deep work. I strongly urge you to begin this practice in 2018— if you want to get anything done or perform your best.
                            </Typography><br/>

                            <Typography variant='p' content='p'>
                            <Link to='' className={classes.bold}>The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life by Mark Manson</Link> To me, practical philosophy has always been the art knowing what to — and what not to — give a fuck about. That’s what Mark’s book is about. It’s not about apathy. It’s about cultivating indifference to things that don’t matter. Be careful, as Marcus Aurelius warns, not to give the little things more time and thought they deserved. Maybe looking back at this year reveals how much effort you’ve frittered away worrying about the trivial. If so, let 2018 be a year that you only devote energy to things that truly matter — get the important things right by ignoring the insignificant.
                            </Typography><br/>

                            <Typography variant='p' content='p'>
                            <Link to='' className={classes.bold}>The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life by Mark Manson</Link> To me, practical philosophy has always been the art knowing what to — and what not to — give a fuck about. That’s what Mark’s book is about. It’s not about apathy. It’s about cultivating indifference to things that don’t matter. Be careful, as Marcus Aurelius warns, not to give the little things more time and thought they deserved. Maybe looking back at this year reveals how much effort you’ve frittered away worrying about the trivial. If so, let 2018 be a year that you only devote energy to things that truly matter — get the important things right by ignoring the insignificant.   
                            </Typography>

                        </Grid>           
                    </Grid>
                    <Grid container direction='row' justify="center" alignItems="center" style={{ marginTop: '90px'}}>
                        <Grid container md={12} style={{ paddingTop: '90px'}}>
                            <Follow />
                        </Grid>
                    </Grid>
                    
                    <Grid container direction='row' justify="center"alignItems="center">
                        <Grid md={12} style={{ paddingTop: '30px' }}>

                            <div style={{marginTop:'20px'}}>
                                <Related/>
                            </div>

                        </Grid>
                    </Grid>
                    
                </Container>
                <Grid  md={12}style={{background:'#191919',padding:'60px',paddingLeft:'190px'}}>
                    <Grid md={11}>
                        <Box display='flex' >
                                <Box flexGrow={1} style={{color:'white'}}>
                                    <Typography variant='h5' color='inherit'>Discover Medium</Typography>
                                    <p style={{color:'white'}}>Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage and inbox.</p>
                                </Box>
                                <Box flexGrow={1} style={{color:'white'}}>
                                    <Typography variant='h5' color='textSecondary' color='inherit'>Make Medium Yours</Typography>
                                    <p style={{color:'white'}}>
                                    Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage and inbox.
                                    </p>
                                </Box>
                                <Box flexGrow={1} style={{color:'white'}}>
                                    <Typography variant='h5' color='textSecondary' color='inherit'>Become a Member</Typography>
                                    <p style={{color:'white'}}>
                                        Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage and inbox.
                                    </p>
                                </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid md={12}style={{background:'#191919',paddingLeft:'190px'}}>
                    <Grid md={11}>
                        <Box display='flex'>
                            <Box flexGrow={1} className={classes.brand} style={{color:'white'}}>
                                Medium
                            </Box>
                            <Box>About</Box>
                            <Box>Help</Box>
                            <Box>Legal</Box>
                        </Box>
                    </Grid>
                </Grid>
                
            </div>
        );
    }
}
export default withStyles(styles)(ArtDetail);