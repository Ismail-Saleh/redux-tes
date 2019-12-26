import React, { Component } from 'react';
import {Typography,Grid} from '@material-ui/core/'

class Index extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={3}>
                        <Grid item xs={12} sm={7} md={4}>
                            <div className=''>
                                
                                <Typography variant='p' color='textSecondary'>aasd</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={5} md={8}>
                        <Typography variant='p' color='textSecondary'>aasd</Typography>
                        </Grid>
                </Grid>
            </div>
        );
    }
}

export default Index;