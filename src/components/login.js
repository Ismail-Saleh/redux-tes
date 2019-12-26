import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Typography,TextField, Container,Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
   
      display: 'flex',
      flexDirection: 'row',
      width:'100%',
      height:'100%',
  
    },
    log:{
        paddingLeft:'30px',
    },
    avatar: {
     
      backgroundColor: theme.palette.secondary.main,
    },
    btn:{
      background: 'black',
      color: 'aliceblue',
      marginBottom:'12px'
    },
    form: {
      marginTop: theme.spacing(1),
    },
    h2: {
      fontFamily:'Times New Roman,Times, serif',
      fontSize: '29px',
      paddingBottom: '12px',
      textAlign:'center',
      color:'black'
    },
    p:{
         textAlign:'center',
         color:'grey',
         fontFamily:'Times New Roman,Times, serif',
         fontSize:'14px'
    },
    field: {
        marginLeft:'32%'
    },
    open:{
        textAlign:'center',
        color:'#56cc79',
        fontFamily:'Arial, Helvetica, sans-serif',
        fontSize:'14px',
        textDecoration:'none' 
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 400,
        border:'1px solid red'
      },
    },
  }));
  
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
                <div className={classes.log}>
                <Container maxWidth='md' fixed >
                    <form className={classes.root} noValidate autoComplete="off">
                        <div className={classes.index}>                                   

                            <Grid 
                                direction="row"
                                
                                spacing={3} 
                                container
                            >
                                <Grid container item md={12} spacing={1} justify="center">
                                    <h2 className={classes.h2}>Sign-In with email</h2>
                                </Grid>
                                <Grid container item md={12} spacing={1} justify='center'>
                                    <p className={classes.p}>Create an account to rechive great stories in your inbox
                                    personalize your homepage,and follow authors and 
                                    topic that you love</p>
                                </Grid>
                                                               
                            </Grid>

                        </div>
                    <div className={classes.field}>
                            
                            
                            
                            <Grid 
                                direction="row"
                                
                                spacing={3} 
                                container
                            >
                                <Grid container item md={12} spacing={1} justify='center'>
                                    <TextField id="standard-basic" label="Your Username" />
                                </Grid>
                                <Grid container item md={12} spacing={1} justify="center">
                                    <TextField id="standard-basic" label="Your Password" />
                                </Grid>
                                
                            </Grid>
                    </div>
               
                            <Grid 
                                direction="row"
                                
                                spacing={3} 
                                container
                            >
                                <Grid container item md={12} spacing={1} justify='center'>
                                     <Button  className={classes.btn}>Continue</Button>
                                     
                                </Grid>
                                <Grid container item md={12} spacing={1} justify='center'>
                                    <p className={classes.open}><b><a href="" className={classes.open}>&lt; All Sign In Option</a></b></p>
                                </Grid>
                                
                            </Grid>
                </form>
                </Container>
                </div>
          </DialogContentText>
        </DialogContent>
       
      </Dialog>
    </div>
  );
}