import React, { Component } from 'react';
import { Box, Typography, IconButton } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import { MoreHoriz } from '@material-ui/icons';

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
        color: 'black',
        opacity: '0.45'
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
    fMenu: {
        color: 'black',
        opacity: '0.58',
        textDecoration: 'none',
        fontSize: '14px'
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

function BtmList (props) {
    const classes = useStyles();
   
        return (
            
            <Box display='flex' pb={3} flexShrink={2}>
                <Box>
                    <Typography variant='h4' style={{ color: '#dfdfdf' }}>{props.number}</Typography>
                </Box>
                <Box>
                    <Box display="flex" bgcolor="background.paper" flexDirection='column'>
                        <Box order={1} bgcolor="" >
                            <a href='#'><Typography variant='h6' className={classes.flex1} style={{ fontSize: '16px' }}>{props.title}</Typography> </a>
                        </Box>
                        <Box order={1} bgcolor="" >
                            <p className={classes.pFlex}><a href='' className={classes.p}>{props.name} </a> in <a href='' className={classes.p} >{props.loc}</a> </p>
                        </Box>
                        <Box order={1} bgcolor="" >
                            <div><p className={classes.pFlex}><a className={classes.month}>{props.date}</a> . <a className={classes.month}>{props.time}</a> </p></div>
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
}

export default BtmList;