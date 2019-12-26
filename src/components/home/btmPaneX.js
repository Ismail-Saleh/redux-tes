import React from 'react';
import { Box, Typography, Avatar, Divider } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { Search, NotificationsNone, ArrowForward } from '@material-ui/icons/'

import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';


import { Grid } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
    article: {
        display: 'flex',
        marginBottom: 48
    },
    doticon: {
        paddingRight: '.3em',
        paddingLeft: '.3em',
        fontSize: '15px',
        '&:after': {
            content: '"\\00B7"'
        }
    },
}));


export default function Btm() {
    const classes = useStyles();
    return (
        <div style={{ width: '100%' }}>
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                    <article className={classes.article}>
                        <div style={{ width: '100%', minWidth: 0, maxWidth: "100%" }}>
                            <Typography variant="overline">BASED ON YOUR READING HISTORY</Typography>

                            <h2>Reusable form-inputs in React. Simple and flexible</h2>
                            <Typography variant="caption" component="p" color="textSecondary">
                                Do not fall in love Do not fall in love Do not fall in love. Who says that ReactApps can’t be SEO Friendly?, Today we are going to take a look to react-helmet, an open-source library created by the…
                            </Typography>
                            <div style={{ display: 'flex', marginTop: 12, }}>
                                <div style={{ flexGrow: 1, minWidth: 0, maxWidth: "100%" }}>
                                    <Typography variant="caption" component="p" noWrap>Jesse Heaslip in Bits and Pieces</Typography>
                                    <Typography variant="caption" component="p" color="textSecondary" noWrap>
                                        <time>Jan 21</time>
                                        <span className={classes.doticon}></span>
                                        <span>6 min read</span>
                                    </Typography>
                                </div>
                                <div >
                                    <BookmarkBorderRoundedIcon />
                                    <MoreHorizRoundedIcon />
                                </div>

                            </div>
                        </div>
                        <a><img style={{ height: 152, marginLeft: 12 }} src="https://cdn-images-1.medium.com/fit/c/304/312/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg" /></a>
                    </article>



                    <article className={classes.article}>
                        <div style={{ width: '100%', minWidth: 0, maxWidth: "100%" }}>
                            <Typography variant="overline">BASED ON YOUR READING HISTORY</Typography>

                            <h2>Reusable form-inputs in React. Simple and flexible</h2>
                            <Typography variant="caption" component="p" color="textSecondary">
                                Do not fall in love Do not fall in love Do not fall in love. Who says that ReactApps can’t be SEO Friendly?, Today we are going to take a look to react-helmet, an open-source library created by the…
                            </Typography>
                            <div style={{ display: 'flex', marginTop: 12, }}>
                                <div style={{ flexGrow: 1, minWidth: 0, maxWidth: "100%" }}>
                                    <Typography variant="caption" component="p" noWrap>Jesse Heaslip in Bits and Pieces</Typography>
                                    <Typography variant="caption" component="p" color="textSecondary" noWrap>
                                        <time>Jan 21</time>
                                        <span className={classes.doticon}></span>
                                        <span>6 min read</span>
                                    </Typography>
                                </div>
                                <div >
                                    <BookmarkBorderRoundedIcon />
                                    <MoreHorizRoundedIcon />
                                </div>

                            </div>
                        </div>
                        <a><img style={{ height: 152, marginLeft: 12 }} src="https://cdn-images-1.medium.com/fit/c/304/312/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg" /></a>
                    </article>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <div>
                        <aside>
                            <a href="#">
                                <div style={{ display: 'flex', alignItems: 'flex-end', padding: 8, backgroundColor: '#D7EFEE', minHeight: 100 }}>

                                    <h2 style={{ padding: 16 }}>
                                        New from your network
                                    </h2>
                                    <img style={{ width: 135 }} src="https://cdn-images-1.medium.com/proxy/1*K3oqw1Ed_6VMaql4HojuDg.png"></img>
                                </div></a>
                            <ol style={{ padding: 32, backgroundColor: '#fafafa' }}>
                                <li style={{ display: 'flex', marginBottom: 24 }}>
                                    <Avatar style={{ marginRight: 10 }} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                    <div>
                                        <h4>These Are Not Your Grandfather’s Hair Plugs</h4>
                                        <div>
                                            <Typography variant="caption" component="p" >Jesse Heaslip in Bits and Pieces</Typography>
                                            <Typography variant="caption" component="p" color="textSecondary" >
                                                <time>Jan 21</time>
                                                <span className={classes.doticon}></span>
                                                <span>6 min read</span>
                                            </Typography>
                                        </div>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', marginBottom: 24 }}>
                                    <Avatar style={{ marginRight: 10 }} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                    <div>
                                        <h4>These Are Not Your Grandfather’s Hair Plugs</h4>
                                        <div>
                                            <Typography variant="caption" component="p" >Jesse Heaslip in Bits and Pieces</Typography>
                                            <Typography variant="caption" component="p" color="textSecondary" >
                                                <time>Jan 21</time>
                                                <span className={classes.doticon}></span>
                                                <span>6 min read</span>
                                            </Typography>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </aside>
                    </div>
                    <div>
                        <aside style={{ padding: 32 }}>
                            <a><h1>Populer on Medium</h1></a>
                            <Divider style={{ margin: '10px 0px' }} />
                            <ol>
                                <li style={{ display: 'flex', marginBottom: 24 }}>
                                    <div style={{ fontSize: 34, color: 'rgba(0,0,0,.15)', marginRight: 10 }}>01</div>
                                    <div>
                                        <h4>These Are Not Your Grandfather’s Hair Plugs</h4>
                                        <div>
                                            <Typography variant="caption" component="p" >Jesse Heaslip in Bits and Pieces</Typography>
                                            <Typography variant="caption" component="p" color="textSecondary" >
                                                <time>Jan 21</time>
                                                <span className={classes.doticon}></span>
                                                <span>6 min read</span>
                                            </Typography>
                                        </div>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', marginBottom: 24 }}>
                                    <div style={{ fontSize: 34, color: 'rgba(0,0,0,.15)', marginRight: 10 }}>02</div>
                                    <div>
                                        <h4>These Are Not Your Grandfather’s Hair Plugs</h4>
                                        <div>
                                            <Typography variant="caption" component="p" >Jesse Heaslip in Bits and Pieces</Typography>
                                            <Typography variant="caption" component="p" color="textSecondary" >
                                                <time>Jan 21</time>
                                                <span className={classes.doticon}></span>
                                                <span>6 min read</span>
                                            </Typography>
                                        </div>
                                    </div>
                                </li>
                            </ol>


                        </aside>
                    </div>
                </Grid>
            </Grid>
        </div>
    );


}