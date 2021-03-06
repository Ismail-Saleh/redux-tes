import React from 'react';
import { MoreHoriz } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Box,Tabs,Tab,Container,Typography} from '@material-ui/core/';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import {  Search,NotificationsNone,ArrowForward} from '@material-ui/icons';
import Btm from './btmPane';
import Top from './topPane';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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

        paddingLeft: '20px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#222',
        fontFamily: 'Arial',

    },
    p: {
        color: '#111',
        textDecoration: 'none',
        paddingLeft: '15px'
    },
    month: {
        color: 'black',
        opacity: '0.45',
        paddingLeft: '15px'
    },
    judul: {
        fontFamily: 'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
        fontWeight: '700',
        lineHeight: '24px'
    },
    pFlex: {
        width: '300px', textAlign: 'left',

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
}));


function BtmKr(props) {
    const classes = useStyles();
    return (

        <Box display='flex' pt={3} pl={8} style={{ width: '100%' }} >
            <Box>

                <p style={{ textAlign: 'left', paddingLeft: '25px' }}><a href='' style={{ textDecoration: 'none' }} className='pop'>{props.category}</a></p>
                <Box display='flex' flexDirection='column' style={{ paddingLeft: '0px' }}>
                    <Box display="flex" bgcolor="background.paper" flexDirection='column'>
                        <Box order={2} bgcolor="" >
                            <a href='#'><Typography variant='h6' className={classes.flex1} style={{ fontSize: '19px', paddingRight: '70px' }}>{props.title}</Typography> </a>

                        </Box>
                        <Box order={2} pl={2} pb={2} maxWidth='380px'>
                            <p className='penjelasan'>{props.detail}</p>
                        </Box>
                    </Box>

                    <Box display='flex'>
                        <Box>
                            <Box order={2} bgcolor="" >
                                <p className={classes.pFlex}><a href='' className={classes.p}>{props.name} </a> in <a href='' className={classes.p} >{props.from}</a> </p>
                            </Box>
                            <Box order={2} bgcolor=""  >
                                <div><p className={classes.pFlex}><a className={classes.month}>{props.date}</a> . <a className={classes.month}>{props.time}</a> </p></div>
                            </Box>
                        </Box>
                        <Box>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <BookmarkBorderSharpIcon />
                            </IconButton>

                        </Box>
                        <Box>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <MoreHoriz />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

            </Box>
            <Box>
                <img src={props.img}></img>
            </Box>
        </Box>



    );
}

export default BtmKr;