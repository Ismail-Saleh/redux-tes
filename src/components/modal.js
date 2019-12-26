import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Fade,Modal,Backdrop} from '@material-ui/core/';
import Dialog from './register/Dialog';
import Login from './login'


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth:900,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    marginLeft:580
    
  },
}));
export default function TransitionsModal() {
    
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Sign-Up
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ margin: 0, padding: 0, }}
      >
        <Fade in={open}>
            
            <div className={classes.paper}>

                <Dialog/>    
            </div>
           
        </Fade>
      </Modal>
    </div>
  );
}