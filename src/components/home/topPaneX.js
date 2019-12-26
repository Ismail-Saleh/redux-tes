import React from 'react';
import { Box, Typography, Grid, Hidden, Link, Button } from '@material-ui/core/'
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Search, NotificationsNone, ArrowForward } from '@material-ui/icons';

import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

//import ListPane from './pane/list'

const useStyles = makeStyles(theme => ({
    // root: {
    //     flexGrow: 1,
    // },
    // img: {
    //     width: '80%',
    //     heigth: 'auto'
    // },
    // menuButton: {
    //     marginRight: theme.spacing(2),
    // },
    // title: {
    //     flexGrow: 1,
    // },
    // flex1: {
    //     width: '300px', textAlign: 'left',
    //     float: 'right',
    //     paddingLeft: '20px',
    //     fontWeight: 'bold',
    //     textDecoration: 'none',
    //     color: '#222',
    //     fontFamily: 'Arial',

    // },
    // p: {
    //     color: '#111',
    //     textDecoration: 'none',

    // },
    // month: {
    //     color: 'black',
    //     opacity: '0.45'
    // },
    // judul: {
    //     fontFamily: 'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
    //     fontWeight: '700',
    //     lineHeight: '24px'
    // },
    // pFlex: {
    //     width: '300px', textAlign: 'left',
    //     float: 'right',
    //     fontSize: '13px',
    //     textDecoration: 'none',
    //     color: '#222',
    //     fontFamily: 'Arial'
    // },
    // brand: {
    //     textAlign: "left",
    //     fontFamily: 'Times New Roman,Times, serif',
    //     fontSize: '29px',
    //     fontWeight: '800'
    // },
    // orange: {
    //     color: '#fff',
    //     backgroundColor: deepOrange[500],
    // },
    // purple: {
    //     color: '#fff',
    //     backgroundColor: deepPurple[500],
    // },
    ////////////TAMBAH
    flexlist: {
        display: 'flex',
        padding: 12,
        flexDirection: 'row',
        //if lebar screen dibawah xs
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'row-reverse',
        }
    },
    leftPane: {
        marginLeft: 24,
        //if lebar screen dibawah sm 
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        }
    },
    doticon: {
        paddingRight: '.3em',
        paddingLeft: '.3em',
        fontSize: '15px',
        '&:after': {
            content: '"\\00B7"'
        }
    },
    seeall: {
        textAlign: 'right',
        //if lebar screen dibawah sm 
        [theme.breakpoints.down('sm')]: {
            textAlign: 'left'
        }
    },
    imagelist: {
        marginRight: 10,
        width: 100,
        [theme.breakpoints.down('xs')]: {
            width: 152,
            marginLeft: 12,
            marginRight: 0,
        }

    }

}));

export default function Top() {
    const classes = useStyles();
    return (
        <div>
            <section style={{ width: '100%' }}>

                {/* Top Pane left */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={7} md={4} >
                        
                        <a href="#" >
                            <img style={{ width: "100%", height: 150 }} src="https://cdn-images-1.medium.com/fit/c/832/302/1*-GsJA8f7J8VrL8RouKCjQw.jpeg" />
                        </a>
                        <div className={classes.leftPane}>
                            <h2>Understanding React Default Props</h2>
                            <Typography variant="caption" component="p" color="textSecondary">How and when to to set default values for props in our React components</Typography>
                            <div style={{ marginTop: 20 }}>
                                <Typography variant="caption" component="p" noWrap>Jesse Heaslip in Bits and Pieces</Typography>
                                <Typography variant="caption" component="p" color="textSecondary" noWrap>
                                    <time>Jan 21</time>
                                    <span className={classes.doticon}></span>
                                    <span>6 min read</span>
                                </Typography>
                            </div>
                        </div>

                    </Grid>
                    {/*End Top Pane left */}


                    {/*pane List center */}
                    <Grid item xs={12} sm={5} md={4} style={{ padding: 0 }} >
                        <div className={classes.flexlist}>
                            <div>
                                <a><img className={classes.imagelist} src="https://via.placeholder.com/100" /></a>
                            </div>
                            <div style={{ width: '100%', minWidth: 0, maxWidth: "100%" }}>
                                <h3>Do not fall in love</h3>
                                <Typography variant="caption" component="p" color="textSecondary" noWrap>Do not fall in love Do not fall in love Do not fall in love </Typography>
                                <div style={{ display: 'flex', marginTop: 12, }}>
                                    <div style={{ flexGrow: 1, minWidth: 0, maxWidth: "100%" }}>
                                        <Typography variant="caption" component="p" noWrap>Jesse Heaslip in Bits and Pieces</Typography>
                                        <Typography variant="caption" component="p" color="textSecondary" noWrap>
                                            <time>Jan 21</time>
                                            <span className={classes.doticon}></span>
                                            <span>6 min read</span>
                                        </Typography>
                                    </div>
                                    <Hidden smUp>
                                        <div>
                                            <BookmarkBorderRoundedIcon />
                                        </div>
                                    </Hidden>
                                </div>
                            </div>
                        </div>

                        <div className={classes.flexlist}>
                            <div>
                                <a><img className={classes.imagelist} src="https://via.placeholder.com/100" /></a>
                            </div>
                            <div style={{ width: '100%', minWidth: 0, maxWidth: "100%" }}>
                                <h3>Do not fall in love</h3>
                                <Typography variant="caption" component="p" color="textSecondary" noWrap>Do not fall in love Do not fall in love Do not fall in love </Typography>
                                <div style={{ display: 'flex', marginTop: 12, }}>
                                    <div style={{ flexGrow: 1, minWidth: 0, maxWidth: "100%" }}>
                                        <Typography variant="caption" component="p" noWrap>Jesse Heaslip in Bits and Pieces</Typography>
                                        <Typography variant="caption" component="p" color="textSecondary" noWrap>
                                            <time>Jan 21</time>
                                            <span className={classes.doticon}></span>
                                            <span>6 min read</span>
                                        </Typography>
                                    </div>
                                    <Hidden smUp>
                                        <div>
                                            <BookmarkBorderRoundedIcon />
                                        </div>
                                    </Hidden>
                                </div>
                            </div>
                        </div>

                        <div className={classes.flexlist}>
                            <div>
                                <a><img className={classes.imagelist} src="https://via.placeholder.com/100" /></a>
                            </div>
                            <div style={{ width: '100%', minWidth: 0, maxWidth: "100%" }}>
                                <h3>Do not fall in love</h3>
                                <Typography variant="caption" component="p" color="textSecondary" noWrap>Do not fall in love Do not fall in love Do not fall in love </Typography>
                                <div style={{ display: 'flex', marginTop: 12, }}>
                                    <div style={{ flexGrow: 1, minWidth: 0, maxWidth: "100%" }}>
                                        <Typography variant="caption" component="p" noWrap>Jesse Heaslip in Bits and Pieces</Typography>
                                        <Typography variant="caption" component="p" color="textSecondary" noWrap>
                                            <time>Jan 21</time>
                                            <span className={classes.doticon}></span>
                                            <span>6 min read</span>
                                        </Typography>
                                    </div>
                                    <Hidden smUp>
                                        <div>
                                            <BookmarkBorderRoundedIcon />
                                        </div>
                                    </Hidden>
                                </div>
                            </div>
                        </div>


                    </Grid>
                    {/*End pane List center */}



                    {/*op Pane right */}

                    {/* Hidden => menyembunyikan component ketika dibawah size screen sm = small , smDown */}
                    <Hidden smDown>
                        <Grid item xs={12} sm={7} md={4} >
                            <a href="#" >
                                <img style={{ width: "100%", height: 150 }} src="https://cdn-images-1.medium.com/fit/c/504/222/1*5_JyY0t-JubQJkSgCM9WpQ.jpeg" />
                            </a>

                            <div style={{ width: '100%', minWidth: 0, maxWidth: "100%" }}>
                                <h2>Software Architecture - The Difference Between</h2>
                                <Typography variant="caption" component="p" color="textSecondary" noWrap>JavaScript is often said to be the easiest language to start with and the hardest to master. I couldn’t agree more. This is because…</Typography>
                                <div style={{ display: 'flex', marginTop: 12, }}>
                                    <div style={{ flexGrow: 1, minWidth: 0, maxWidth: "100%" }}>
                                        <Typography variant="caption" component="p" noWrap>Viral Shah in Noteworthy - The Journal Blog</Typography>
                                        <Typography variant="caption" component="p" color="textSecondary" noWrap>
                                            <time>Jan 21</time>
                                            <span className={classes.doticon}></span>
                                            <span>6 min read</span>
                                        </Typography>
                                    </div>
                                    <Hidden smUp>
                                        <div>
                                            <BookmarkBorderRoundedIcon />
                                        </div>
                                    </Hidden>
                                </div>
                            </div>

                        </Grid>
                    </Hidden>
                    {/*End Top Pane right */}

                </Grid>
            </section>

            {/* button see all featured */}
            <div className={classes.seeall}>
                <Button
                    style={{ color: '#03a87c' }}
                    endIcon={<ArrowForwardIosRoundedIcon />}
                >
                    SEE ALL FEATURED
                </Button>
            </div>
        </div>
    );


}