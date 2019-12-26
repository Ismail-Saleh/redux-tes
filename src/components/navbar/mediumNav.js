import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Avatar,IconButton,Button,Toolbar ,AppBar,Box,Tabs,Tab,Container,Typography} from '@material-ui/core/';
import {  Search,NotificationsNone,ArrowForward} from '@material-ui/icons';
import { deepOrange, deepPurple } from '@material-ui/core/colors';


const styles = theme => ({
    root: {


    },
    img: {
        width: '80%',
        heigth: 'auto'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    flex1: {
        width: '300px', textAlign: 'left',
        float: 'right',
        paddingLeft: '20px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#222',
        fontFamily: 'Arial',

    },
    p: {
        color: '#111',
        textDecoration: 'none',

    },
    month: {
        color: '#555',
    },
    judul: {
        fontFamily: 'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
        fontWeight: '700',
        lineHeight: '24px'
    },
    pFlex: {
        width: '300px', textAlign: 'left',
        float: 'right',
        fontSize: '13px',
        textDecoration: 'none',
        color: '#222',
        fontFamily: 'Arial'
    },
    brand: {
        textAlign: "left",
        fontFamily: 'Times New Roman,Times, serif',
        fontSize: '29px',
        fontWeight: '800'
    },
    orange: {
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
});

class Comment extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div >


<div className={classes.root}>
      <AppBar position="static" style={{background:'#fff',color:'#000',boxShadow:'0px -9px 19px 1px rgba(0,0,0,0.75)'}}>
        <Toolbar>
        <div style={{ width: '100%' }}>
            <Box display="flex" p={1} >
                <Box p={1} flexGrow={1} className={classes.brand}>
                Medium 
                </Box>
                <Box p={1}>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <NotificationsNone/>
                    </IconButton>
                </Box>

                <Box p={1}>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <Search/>
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


            </div>
        );
    }
}

export default withStyles(styles)(Comment);