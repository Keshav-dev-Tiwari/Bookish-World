
// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//     },
//   },
//   paper: {
//     padding: theme.spacing(2),
//   },
//   form: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   fileInput: {
//     width: '97%',
//     margin: '10px 0',
//   },
//   buttonSubmit: {
//     marginBottom: 10,
//   },
// }));


import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0.5),
    },
  },
  paper: {
    padding: theme.spacing(2),
    paddingTop: '0',
    paddingBottom: '0',
    width: '80%',
    // marginLeft: '25%',
    // backgroundColor: 'black',
    // color: "white",
    
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: '10px',
  },
  buttonClear: {
    marginBottom: '10px',
  },
  // TextField: {
  //   backgroundColor: "black",
  // },
  // notchedOutline: {
  //   borderWidth: "1px",
  //   borderColor: "white !important"
  // },

}));
