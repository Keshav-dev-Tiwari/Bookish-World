// import { makeStyles } from '@material-ui/core/styles';
// import { deepPurple } from '@material-ui/core/colors';

// export default makeStyles((theme) => ({
//   appBar: {
//     borderRadius: 15,
//     margin: '15px 0',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     // justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px 50px',
//     backgroundColor: 'black',
//     color: 'white',
//     width: '800px',
//     marginLeft: 'auto',
//     marginRight:'auto',
//   },
//   heading: {
//     color: 'salmon',
//     textDecoration: 'none',
//   },
//   image: {
//     marginLeft: '10px',
//     marginRight: '15px',
//   },
//   toolbar: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     width: '400px',
//   },
//   profile: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '400px',
//   },
//   userName: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   brandContainer: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   purple: {
//     color: theme.palette.getContrastText(deepPurple[500]),
//     backgroundColor: deepPurple[500],
//     // display: 'flex',
//     // alignItems: 'center',
//     // marginLeft: '35%',
//     // height: '30px',
//     // width: '30px',
//     // marginTop: '0.75%',
//   },
// }));


import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    marginRight: '-50px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '15px',
    marginLeft: '-20%',
  },
  brandContainer: {
    display: 'flex',
    marginLeft: '-100px'
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    display: 'flex',
    alignItems: 'center',
    marginLeft: '25%',
    height: '30px',
    width: '30px',
    marginTop: '0.75%',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
  appBar: {
    borderRadius: 15,
    margin: '15px 0 15px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black',
    color: 'white',
    width: '70%',
    marginLeft: 'auto',
    marginRight:'auto',
  },
  heading: {
    color: 'salmon',
    textDecoration:'None',
  },
  image: {
    marginLeft: '15px',
    marginRight: '15px',
  },
  
}));