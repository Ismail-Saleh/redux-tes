import React from 'react';
import {Button,CssBaseline,TextField} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'react-image';
import kiri from '../../../src/1.png';
import kanan from '../../../src/2.png';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width:'100%',
    height:'100%',

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  btn:{
    background: 'black',
  color: 'aliceblue',
  marginLeft:'30%',
  marginBottom:'12px'
  },
  form: {
    marginTop: theme.spacing(1),
  },
  h2: {
    fontFamily:'Times New Roman,Times, serif',
    fontSize: '37px',
    paddingBottom: '25px',
    textAlign:'center',
  },
  p:{
       textAlign:'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 400,
    },
  },
}));

export default function SignIn() {
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
      <CssBaseline />
<div className={classes.paper}>
        
        <div> 
           <Img src={kiri}></Img>
        </div>

    
        <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.index}>
                <h2 className={classes.h2} >Join Medium</h2>
                                  
                <p className={classes.p}>Create an account to rechive great stories in your inbox
                   personalize your homepage,and follow authors and 
                   topic that you love</p>
        </div>
                <TextField placeholder="Your Username" margin="normal" fullWidth required inputProps={{ style: { textAlign: 'center' } }} />
                <TextField placeholder="Your Password" margin="normal" fullWidth required inputProps={{ style: { textAlign: 'center' } }} />
                <TextField placeholder="Your Email" margin="normal" fullWidth required inputProps={{ style: { textAlign: 'center' } }} />

      <div className='texts'>
            <Button variant="contained" className={classes.btn}>Registration</Button>
            <p className={classes.p}><b>Do You Have Account ? <a>Sign-In</a></b></p>
      </div>
      
        <div className='texts'>
            <p className={classes.p}>It make medium work, we log user data  and share  it</p>
            <p className={classes.p}>with service providers, Click "Sign-Up" above to accept</p>
            <p className={classes.p}>Medium <a href='' className='tnp'>Terms Of Service </a> & <a href='' className='tnp'>Privacy Policy</a> </p>
        </div>
    </form>

        <div> 
            <Img src={kanan}></Img>
        </div>

</div>
      
</div>
  );
}