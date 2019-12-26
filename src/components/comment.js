import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Avatar,TextareaAutosize,Link,Button,Box,Toolbar, Typography, Paper, Container, Grid,IconButton } from '@material-ui/core/'
import {BookmarkBorderOutlined,KeyboardArrowDownOutlined,ChatBubbleOutline,SentimentVerySatisfied} from '@material-ui/icons/';
import Nav from './navbar/mediumNav'
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin:'40px',
        width:'540px',
        border: '1px solid #eee',
    },
    ol:{
        display:'inline'
    },
    body: {
        background: '#FAFAFA'
    },
    paper: {
        padding: theme.spacing(3),
        boxShadow :'none',
        border : '1px solid #e5e5e5',
        marginTop:'12px',
        marginBottom :'20px'
      },
      orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
      },
      purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
      },
});

class Comment extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
            <Nav />
            <Link To=''>
                <Grid container direction="row" style={{paddingTop:'80px'}}>
                    <Grid md={8} sm={8} xs={8} style={{ marginLeft: '320px' }}>
                        <Typography variant='p' style={{fontWeight:'700',fontSize:'16px'}}>Showing response for :</Typography>
                        <Grid item md={10}>
                            <Link to='' style={{cursor:'pointer'}}>
                                <Paper className={classes.paper}>
                                                                      
                                    <Grid container direction='row'>
                                    <Grid md={8} style={{paddingTop:'20px'}}>
                                        <Typography variant='p'>Can you console.login JSX?</Typography><br/>
                                        <Typography variant='caption' color='textSecondary'>Liorec Munstaner</Typography>
                                      </Grid>
                                      <Grid md={3} alignItems='center' alignContent='center' container>
                                        <ol style={{listStyle:'none',lineHeight:'40px',display:'flex'}}>
                                            <li ><SentimentVerySatisfied /></li><span style={{position:'relative',top:'-6px',paddingRight:'10px'}}>255</span>
                                            <li><ChatBubbleOutline/></li><span style={{position:'relative',top:'-8px'}}>55</span>
                                        </ol>
                                      </Grid>
                                    </Grid>
                                </Paper>
                            </Link>
                        </Grid>                   
                    </Grid> 
                </Grid>
            </Link>

            

            <div style={{background:'#fafafa'}}>
                <Grid container direction="row" style={{paddingTop:'10px'}}>
                    <Grid md={8} sm={8} xs={8} style={{ marginLeft: '320px' }}>
                        <Typography variant='p' style={{fontWeight:'700',fontSize:'16px'}}>
                           Response
                        </Typography>
                        
                        <Grid item md={10}>
                            <Paper className={classes.paper}>
                                <Avatar className={classes.purple}>N</Avatar>
                                
                                <div style={{marginTop:'20px',paddingBottom:'150px'}}>
                                    <TextareaAutosize aria-label="empty textarea" placeholder="Insert Text Here..." className='textarea' />
                                </div>
                                <div>
                                    <Grid md={8} container direction='row'>
                                        <Button variant="outlined" color="primary">
                                            Submit
                                        </Button>
                                    </Grid>
                                </div>
                            </Paper>
                        </Grid>
                        
                    </Grid>
                </Grid>

                <Grid container direction="row" style={{paddingTop:'10px'}}>
                    <Grid md={8} sm={8} xs={8} style={{ marginLeft: '320px' }}>
                                               
                        <Grid item md={10}>
                            <Paper className={classes.paper}>
                                <Grid container direction='row'>
                                    <Grid item md={1}>
                                        <Avatar className={classes.orange}>i</Avatar>
                                    </Grid>
                                    <Grid item md={10}>
                                        <Link to=''> 
                                            <Typography variant='p'>Sam Groth</Typography><br/>
                                        </Link>
                                            <Typography variant='caption' color='textSecondary'>8 Aug</Typography> 
                                        
                                    </Grid>
                                </Grid>
                                <Grid style={{marginTop:'15px'}}>
                                    <Link to='' style={{fontSize:'20px',color:'#222'}}>
                                         I would change the TLDR to “you can, but shouldn’t”. One of the most important lessons in coding is that there are things that you can do, but are impractical and bad practice so you shouldn’t do them.
                                    </Link>
                                </Grid>
                                
                            </Paper>
                        </Grid>
                        <Grid item md={10}>
                            <Paper className={classes.paper}>
                                <Grid container direction='row'>
                                    <Grid item md={1}>
                                        <Avatar className={classes.purple}>S</Avatar>
                                    </Grid>
                                    <Grid item md={10}>
                                        <Link to=''> 
                                            <Typography variant='p'>Suwandi</Typography><br/>
                                        </Link>
                                            <Typography variant='caption' color='textSecondary'>8 Aug</Typography> 
                                        
                                    </Grid>
                                </Grid>
                                <Grid style={{marginTop:'15px'}}>
                                    <Link to='' style={{fontSize:'20px',color:'#222'}}>
                                         I would change the TLDR to “you can, but shouldn’t”. One of the most important lessons in coding is that there are things that you can do, but are impractical and bad practice so you shouldn’t do them.
                                    </Link>
                                </Grid>
                                <Box display='flex' style={{paddingTop:'20px'}}>
                                        <Box flexGrow={1}>
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <SentimentVerySatisfied/>
                                            </IconButton>
                                        </Box>
                                        <Box>
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <BookmarkBorderOutlined/>
                                            </IconButton>
                                        </Box>
                                        <Box>
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <KeyboardArrowDownOutlined/>
                                            </IconButton>
                                        </Box>
                                </Box>
                                
                            </Paper>

                            
                        </Grid>
                    </Grid>
                </Grid>


            </div>

            </div>
        );
    }
}

export default withStyles(styles)(Comment);