import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography,Grid,Box,Avatar,Link,IconButton } from '@material-ui/core';
import {BookmarkBorderOutlined,KeyboardArrowDownOutlined} from '@material-ui/icons/'

const styles = theme => ({
    root: {
        flexGrow: 1,
        
    },
});




class RelatedArticle extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>

                
                <Typography variant='h6' style={{fontWeight:'bolder'}} color='textPrimary'>More From Medium</Typography>
                <hr style={{border:'1px solid #e1e1e1'}} />
               
               <Grid container direction='row' style={{marginTop:'40px',marginBottom:'60px'}}>
                    <Grid item style={{paddingLeft:'19px'}}>
                        <Grid>
                            <img src='https://miro.medium.com/max/328/1*soo6Uu6ZOZpTiedY996Htg.gif' style={{width:'376px',height:'249px'}}></img>
                        </Grid>
                        <Grid style={{maxWidth:'376px',paddingTop:'15px'}}>
                            <Typography variant='h5'>Yes, it’s npx, not npm — the difference explained</Typography>
                            <Box display='flex' style={{paddingTop:'20px'}}>
                                <Box><Avatar alt="Remy Sharp" src="https://miro.medium.com/fit/c/80/80/2*4zbwkqVpErRp23D7KYi1zw.jpeg" /></Box>
                                <Box flexGrow={1}>
                                    <Link to=''>Magdalena Silijnakova</Link><br/>
                                    <Typography variant='caption' color='textSecondary'>6 Dec . 6 minute Read</Typography>
                                </Box>
                                <Box>
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <BookmarkBorderOutlined/> 
                                    </IconButton><span>355</span>
                                </Box>
                                <Box>
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <KeyboardArrowDownOutlined/>
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    
                    <Grid item style={{paddingLeft:'19px'}}>
                        <Grid style={{maxWidth:'376px'}}>
                            <img src='https://miro.medium.com/max/656/0*q9-s-lgjGyhphKiP' style={{width:'376px',height:'249px'}} />
                        </Grid>
                        <Grid style={{maxWidth:'376px',paddingTop:'15px'}}>
                            <Typography variant='h5'>Yes, it’s npx, not npm — the difference explained</Typography>
                            <Box display='flex' style={{paddingTop:'20px'}}>
                                <Box><Avatar alt="Remy Sharp" src="https://miro.medium.com/fit/c/80/80/2*4zbwkqVpErRp23D7KYi1zw.jpeg" /></Box>
                                <Box flexGrow={1}>
                                    <Link to=''>Magdalena Silijnakova</Link><br/>
                                    <Typography variant='caption' color='textSecondary'>6 Dec . 6 minute Read</Typography>
                                </Box>
                                <Box>
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <BookmarkBorderOutlined/> 
                                    </IconButton><span>355</span>
                                </Box>
                                <Box>
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <KeyboardArrowDownOutlined/>
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item style={{paddingLeft:'19px'}}>
                        <Grid style={{maxWidth:'376px'}}>
                            <img src='https://miro.medium.com/max/656/1*dahHaMDlEHzN_oXTam7Ibw.jpeg' style={{width:'376px',height:'249px'}} />
                        </Grid>
                        <Grid style={{maxWidth:'376px',paddingTop:'15px'}}>
                            <Typography variant='h5'>Yes, it’s npx, not npm — the difference explained</Typography>
                            <Box display='flex' style={{paddingTop:'20px'}}>
                                <Box><Avatar alt="Remy Sharp" src="https://miro.medium.com/fit/c/80/80/2*4zbwkqVpErRp23D7KYi1zw.jpeg" /></Box>
                                <Box flexGrow={1}>
                                    <Link to=''>Magdalena Silijnakova</Link><br/>
                                    <Typography variant='caption' color='textSecondary'>6 Dec . 6 minute Read</Typography>
                                </Box>
                                <Box>
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <BookmarkBorderOutlined/> 
                                    </IconButton><span>355</span>
                                </Box>
                                <Box>
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <KeyboardArrowDownOutlined/>
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
               </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(RelatedArticle);