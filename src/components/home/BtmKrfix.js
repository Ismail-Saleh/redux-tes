import React, { Component } from 'react';
import { MoreHoriz } from '@material-ui/icons';
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
import { withStyles } from '@material-ui/core/styles';


const btm = [
    {
        id: 1,
        number: '01',
        title: 'lorem ipsum dolor set amet',
        name: 'Sílvia Bastos',
        loc: 'Better Human',
        date: '26 Desember',
        time: '6 min read'
    },
    {
        id: 2,
        number: '02',
        title: 'Stop Obsessing About Focus: Here’s What Your Mind Really Needs',
        name: 'Sílvia Bastos',
        loc: 'Better Human',
        date: '26 Desember',
        time: '6 min read'
    },
    {
        id: 3,
        number: '03',
        title: 'Stop Obsessing About Focus: Here’s What Your Mind Really Needs',
        name: 'Sílvia Bastos',
        loc: 'Better Human',
        date: '26 Desember',
        time: '6 min read'
    },
    {
        id: 4,
        number: '04',
        title: 'Stop Obsessing About Focus: Here’s What Your Mind Really Needs',
        name: 'Sílvia Bastos',
        loc: 'Better Human',
        date: '26 Desember',
        time: '6 min read'
    },
]

const btmKiri = [
    {
        id: 1,
        category: 'Education',
        title: 'How to Tell if Someone Values You',
        detail: 'The endearing popularity of nineties icon, actor Keanu Reeves, has spiked in recent months. The summation would be that in this jarring',
        name: 'Caroline ',
        from: 'One Zero',
        date: 'Nov 26',
        time: '6 min read',
        img : 'https://cdn-images-1.medium.com/fit/c/152/156/1*YMO8ko10TpWBSyIwPqBxLA.jpeg'
    },
    {
        id: 2,
        category: 'Education',
        title: 'How to Tell if Someone Values You',
        detail: 'The endearing popularity of nineties icon, actor Keanu Reeves, has spiked in recent months. The summation would be that in this jarring',
        name: 'Caroline ',
        from: 'One Zero',
        date: 'Nov 26',
        time: '6 min read',
        img : 'https://cdn-images-1.medium.com/fit/c/152/156/1*_-a96T1bGeRU8nE1-861rA.jpeg'
    },
    {
        id: 3,
        category: 'Education',
        title: 'How to Tell if Someone Values You',
        detail: 'The endearing popularity of nineties icon, actor Keanu Reeves, has spiked in recent months. The summation would be that in this jarring',
        name: 'Caroline ',
        from: 'One Zero',
        date: 'Nov 26',
        time: '6 min read',
        img : 'https://cdn-images-1.medium.com/fit/c/152/156/0*ZxYqC36-y74gbed5'
    },
    {
        id: 4,
        category: 'Education',
        title: 'How to Tell if Someone Values You',
        detail: 'The endearing popularity of nineties icon, actor Keanu Reeves, has spiked in recent months. The summation would be that in this jarring',
        name: 'Caroline ',
        from: 'One Zero',
        date: 'Nov 26',
        time: '6 min read',
        img : 'https://cdn-images-1.medium.com/fit/c/152/156/0*r-2l4UXr7gI99vWV'
    }
]



const styles = theme => ({
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
});


class BtmKrfix extends Component {
    render() {
        const { classes } = this.props;
        return (
            
            <Box display='flex' pt={3} pl={8} style={{ width: '100%' }} >
            <Box>

                <p style={{ textAlign: 'left', paddingLeft: '25px' }}><a href='' style={{ textDecoration: 'none' }} className='pop'>{this.props.category}</a></p>
                <Box display='flex' flexDirection='column' style={{ paddingLeft: '0px' }}>
                    <Box display="flex" bgcolor="background.paper" flexDirection='column'>
                        <Box order={2} bgcolor="" >
                            <a href='#'><Typography variant='h6' className={classes.flex1} style={{ fontSize: '19px', paddingRight: '70px' }}>{this.props.title}</Typography> </a>

                        </Box>
                        <Box order={2} pl={2} pb={2} maxWidth='380px'>
                            <p className='penjelasan' style={{overflow:'hidden', whiteSpace:'nowrap',textOverflow:'ellipsis'}}>{this.props.content}</p>
                        </Box>
                    </Box>

                    <Box display='flex'>
                        <Box>
                            <Box order={2} bgcolor="" >
                                <p className={classes.pFlex}><a href='' className={classes.p}>{this.props.name} </a> <a href='' className={classes.p} >{this.props.from}</a> </p>
                            </Box>
                            <Box order={2} bgcolor=""  >
                                <div><p className={classes.pFlex}><a className={classes.month}>{this.props.date}</a> . <a className={classes.month}>{this.props.time}</a> </p></div>
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
                <img src={this.props.img} style={{width:'170px',height:'auto'}}></img>
            </Box>
        </Box>

        );
    }
}
export default withStyles(styles)(BtmKrfix);
