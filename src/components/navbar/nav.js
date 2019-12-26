import React, { Component } from 'react';
import { Paper, Tabs, Tab, Grid } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        backgroundColor: "red"
    }

});

class Nav extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container style={{borderBottom:'1px solid #e5e5e5',borderTop:'1px solid #e5e5e5',paddingLeft:'90px'}}>
                    <Grid item md={2} container
                    direction="row"
                    justify="center"
                    alignItems="center">
                        <img src='https://miro.medium.com/max/432/1*IPEsgX_bZKP_7OubdnI7-Q.png' style={{width:'80%',height:'auto'}}></img>
                     
                    </Grid>
                    <Grid item md={10}>
                        
                            <Tabs
                                value={0}
                                indicatorColor="primary"
                                textColor="primary"
                                color ='primary'
                            >
                                <Tab label="MISSION ORIGINAL" />
                                |
                                <Tab label="SUBSCRIBE" />
                                
                            </Tabs>
                        
                    </Grid>
                    
                </Grid>
            </div>
        );
    }
}

export default Nav;