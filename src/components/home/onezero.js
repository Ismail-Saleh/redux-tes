import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { Button, Container, Grid,Typography,Link, Toolbar, IconButton, Avatar } from '@material-ui/core/'
import { Search, NotificationsNone } from '@material-ui/icons';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    brand: {
        textAlign: "left",
        fontFamily: 'Times New Roman,Times, serif',
        fontSize: '29px',
        fontWeight: '800'
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 0),
        fontSize:'15px'
      },
    orange: {
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
    content: {
        margin: 'auto',
        fontSize: '18px',
        textAlign: 'center'
    },
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function One() {
    const classes = useStyles();

    return (

        <Container>

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

            <div className={classes.root}>
                <Grid container spacing={0} style={{ marginTop: '50px' }}>
                    <Grid item xs={4}>
                        <img className='zeroimg' src='https://miro.medium.com/max/400/1*cw32fIqCbRWzwJaoQw6BUg.png'></img>
                    </Grid>
                    <Grid item xs={5}>
                        <p className='p'>
                            <span className='title'>The front lines of the future.</span>A Medium publication about tech and science.
                        </p>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" color="primary" className='titlebtn'>
                            Follow
                        </Button>
                    </Grid>

                </Grid>

                <Grid container spacing={0} style={{ marginTop: '50px' }}>

                    <Grid item xs={7}>
                        <img style={{ width: '705px', height: '370px', backgroundSize: 'cover' }} src='https://miro.medium.com/max/1512/1*jOvu1hK1XTrBswWU7hHcMg.jpeg'></img>
                    </Grid>
                    <Grid item xs={5} style={{ background: '#6A0BFF', color: 'white' }}>
                        <Box display='flex' flexDirection='column' maxWidth='300px' style={{ marginLeft: '100px', marginTop: '120px' }}>
                            <Box className={classes.content}><h2>The Influencer and the Hit Man</h2></Box>
                            <Box className='titlep'><p >How a years-long domain name feud ended in a bloody shootout</p></Box>
                            <Box className='titlep'><p><a href='' style={{ color: '#DAF832', textDecoration: 'none' }}>Ian Frich</a></p></Box>
                            <Box className='titlep'>
                                <p>

                                    <a href='' style={{ color: '#fff', textDecoration: 'none', paddingRight: '15px' }}>Dec 10</a>.
                                        <a href='' style={{ color: '#fff', textDecoration: 'none', paddingLeft: '15px' }}>26 Min Read</a>
                                </p>
                            </Box>
                        </Box>


                    </Grid>

                </Grid>

                <Grid container spacing={0} style={{ marginTop: '60px' }}>


                    <Grid item xs={5}>
                        <Box display='flex' flexDirection='column' maxWidth='300px' style={{ marginLeft: '100px', marginTop: '120px' }}>
                            <Box className={classes.content}><h2>The Influencer and the Hit Man</h2></Box>
                            <Box className='titlep'><p >How a years-long domain name feud ended in a bloody shootout</p></Box>
                            <Box className='titlep'><p><a href='' style={{ color: '#6A0BFF', textDecoration: 'none' }}>Ian Frich</a></p></Box>
                            <Box className='titlep'>
                                <p>

                                    <a href='' style={{ color: '#000', textDecoration: 'none', paddingRight: '15px' }}>Dec 10</a>.
                                        <a href='' style={{ color: '#000', textDecoration: 'none', paddingLeft: '15px' }}>26 Min Read</a>
                                </p>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={7}>
                        <img style={{ width: '705px', height: '370px', backgroundSize: 'cover' }} src='https://miro.medium.com/max/1512/1*MDxT8MJL3DmelDMv3-gd9A.gif'></img>
                    </Grid>

                </Grid>

                <Grid container spacing={0} style={{ marginTop: '50px' }}>

                    <Grid item xs={7}>
                        <img style={{ width: '705px', height: '370px', backgroundSize: 'cover' }} src='https://miro.medium.com/max/1512/0*LG1uUR7TbMplW8xf'></img>
                    </Grid>
                    <Grid item xs={5} style={{ background: '#6A0BFF', color: 'white' }}>
                        <Box display='flex' flexDirection='column' maxWidth='300px' style={{ marginLeft: '100px', marginTop: '120px' }}>
                            <Box className={classes.content}><h2>The Influencer and the Hit Man</h2></Box>
                            <Box className='titlep'><p >How a years-long domain name feud ended in a bloody shootout</p></Box>
                            <Box className='titlep'><p><a href='' style={{ color: '#DAF832', textDecoration: 'none' }}>Ian Frich</a></p></Box>
                            <Box className='titlep'>
                                <p>

                                    <a href='' style={{ color: '#fff', textDecoration: 'none', paddingRight: '15px' }}>Dec 10</a>.
                                        <a href='' style={{ color: '#fff', textDecoration: 'none', paddingLeft: '15px' }}>26 Min Read</a>
                                </p>
                            </Box>
                        </Box>


                    </Grid>

                </Grid>

                <Grid container spacing={0} style={{ marginTop: '60px' }}>


                    <Grid item xs={5}>
                        <Box display='flex' flexDirection='column' maxWidth='300px' style={{ marginLeft: '100px', marginTop: '120px' }}>
                            <Box className={classes.content}><h2>The Influencer and the Hit Man</h2></Box>
                            <Box className='titlep'><p >How a years-long domain name feud ended in a bloody shootout</p></Box>
                            <Box className='titlep'><p><a href='' style={{ color: '#6A0BFF', textDecoration: 'none' }}>Ian Frich</a></p></Box>
                            <Box className='titlep'>
                                <p>

                                    <a href='' style={{ color: '#000', textDecoration: 'none', paddingRight: '15px' }}>Dec 10</a>.
                    <a href='' style={{ color: '#000', textDecoration: 'none', paddingLeft: '15px' }}>26 Min Read</a>
                                </p>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={7}>
                        <img style={{ width: '705px', height: '370px', backgroundSize: 'cover' }} src='https://miro.medium.com/max/1512/1*yYP8rlvTuCML1_N9AlQOTg.jpeg'></img>
                    </Grid>

                </Grid>



                <Grid container spacing={0} style={{ marginTop: '60px' }}>


                    <Grid item xs={12} style={{ background: '#DAF832' }}>

                        <Box display='flex' flexDirection='column'>
                            <Box width='700px' pl={24}>

                                <Box>
                                    <p className='yellowp'><a href=''>"We have a few new things to share."</a> </p>
                                </Box>
                                <Box pb={5}><p><a href=''>-Doman Beres</a> </p></Box>
                                <Box><p><a href=''>Welcome to a Refreshed OneZero</a> </p></Box>
                                <Box pb={3}>
                                    <p>

                                        <a href='' style={{ color: '#000', textDecoration: 'none', paddingRight: '15px' }}>Dec 10</a>.
                                        <a href='' style={{ color: '#000', textDecoration: 'none', paddingLeft: '15px' }}>26 Min Read</a>
                                    </p>
                                </Box>

                            </Box>
                        </Box>

                    </Grid>

                </Grid><br />
                <Container><hr /></Container>



                <Grid container spacing={0} style={{ marginTop: '60px' }}>

                    <Grid
                        container spacing={0}
                        style={{ marginTop: '60px', }}
                        justify="center"
                        alignItems="center"
                    >

                        <Grid item xs={4}>

                            <Box display='flex' flexDirection='column' pr={9}>
                                <Box><h3>Infosec Engineers Are Suffering to Keep Us Safe</h3></Box>
                                <Box>
                                    <p>A growing industry concern over mental burnout is leading engineers to seek out healthier work environments</p>
                                </Box>
                            </Box>


                        </Grid>

                        <Grid item xs={4}>
                            <img src='https://miro.medium.com/max/1512/1*LAusJboilH1LlbNWKeTOxw.jpeg' style={{ width: '270px', height: 'auto', justifyContent: 'center' }}></img>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid container spacing={0} style={{ marginTop: '60px' }}>

                    <Grid
                        container spacing={0}
                        style={{ marginTop: '60px', }}
                        justify="center"
                        alignItems="center"
                    >

                        <Grid item xs={4}>

                            <Box display='flex' flexDirection='column' pr={9}>
                                <Box><h3>Infosec Engineers Are Suffering to Keep Us Safe</h3></Box>
                                <Box>
                                    <p>A growing industry concern over mental burnout is leading engineers to seek out healthier work environments</p>
                                </Box>
                            </Box>


                        </Grid>

                        <Grid item xs={4}>
                            <img src='https://miro.medium.com/max/1512/1*LAusJboilH1LlbNWKeTOxw.jpeg' style={{ width: '270px', height: 'auto', justifyContent: 'center' }}></img>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid container spacing={0} style={{ marginTop: '60px' }}>

                    <Grid
                        container spacing={0}
                        style={{ marginTop: '60px', }}
                        justify="center"
                        alignItems="center"
                    >

                        <Grid item xs={4}>

                            <Box display='flex' flexDirection='column' pr={9}>
                                <Box><h3>Infosec Engineers Are Suffering to Keep Us Safe</h3></Box>
                                <Box>
                                    <p>A growing industry concern over mental burnout is leading engineers to seek out healthier work environments</p>
                                </Box>
                            </Box>


                        </Grid>

                        <Grid item xs={4}>
                            <img src='https://miro.medium.com/max/1512/1*LAusJboilH1LlbNWKeTOxw.jpeg' style={{ width: '270px', height: 'auto', justifyContent: 'center' }}></img>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid container spacing={0} style={{ marginTop: '60px' }}>

                    <Grid
                        container spacing={0}
                        style={{ marginTop: '60px', }}
                        justify="center"
                        alignItems="center"
                    >

                        <Grid item xs={4}>

                            <Box display='flex' flexDirection='column' pr={9}>
                                <Box><h3>Infosec Engineers Are Suffering to Keep Us Safe</h3></Box>
                                <Box>
                                    <p>A growing industry concern over mental burnout is leading engineers to seek out healthier work environments</p>
                                </Box>
                            </Box>


                        </Grid>

                        <Grid item xs={4}>
                            <img src='https://miro.medium.com/max/1512/1*LAusJboilH1LlbNWKeTOxw.jpeg' style={{ width: '270px', height: 'auto', justifyContent: 'center' }}></img>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid container spacing={0} style={{ marginTop: '60px' }}>

                    <Grid
                        container spacing={0}
                        style={{ marginTop: '60px', }}
                        justify="center"
                        alignItems="center"
                    >

                        <Grid item xs={4}>

                            <Box display='flex' flexDirection='column' pr={9}>
                                <Box><h3>Infosec Engineers Are Suffering to Keep Us Safe</h3></Box>
                                <Box>
                                    <p>A growing industry concern over mental burnout is leading engineers to seek out healthier work environments</p>
                                </Box>
                            </Box>


                        </Grid>

                        <Grid item xs={4}>
                            <img src='https://miro.medium.com/max/1512/1*LAusJboilH1LlbNWKeTOxw.jpeg' style={{ width: '270px', height: 'auto', justifyContent: 'center' }}></img>
                        </Grid>

                    </Grid>

                </Grid>

<hr style={{border:'1px solid #b2b2b2',marginTop:'70px'}}/>
                <footer className={classes.footer}>
                    <Container maxWidth="lg">
                        <Typography variant="subtitle1" align="right" color="textSecondary" component="p">
                            <p style={{fontSize:'15px'}}><a>About One Zero</a> . <a>One Medium</a> . <a>Terms</a> . <a>Privacy</a></p>
                        </Typography>
                    
                    </Container>
                </footer>


            </div>

        </Container>



    );
}