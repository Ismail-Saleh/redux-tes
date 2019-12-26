import React from 'react';

import { Container } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    test: {
        color: "red",
        [theme.breakpoints.down('sm')]: {
            color: 'blue'
        }
    }
});

class testBreakpoint extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Container className={classes.test}>
                TST DFKDDKSKDKSKD
    </Container>)
    }
}

export default withStyles(styles)(testBreakpoint);