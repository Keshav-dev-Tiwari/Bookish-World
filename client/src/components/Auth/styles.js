import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    // backgroundColor: 'yellow',
    // color: 'white',
    width: "75%",
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  //   '& .MuiInput-input': {
  //     font: "inherit",
  //     color: "white !important",
  //     width: "100%",
  //     border: "0",
  //     height: "1.1876em",
  //     margin: "0",
  //     display: "block",
  //     padding: "6px 0 7px",
  // }
},
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "salmon",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  // TextField: {
  //   backgroundColor: "black",
  //   color: "white"
  // },
  // notchedOutline: {
  //   borderWidth: "1px",
  //   borderColor: "white !important",
  //   backgroundColor: "pink",
  // },
  // input1: {
  //   color:"white !important",
  // }
}));
