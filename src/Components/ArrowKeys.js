import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { blue } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => ({
    root: {
       alignItems: "center", 
       width: 350,
       height: 150,
       padding: 20,
       marginLeft: 50,
    },
    right_root: {
      height: 100,
      width: 100,
      color: "#A8D0E6",
      justifyContent:'center',
      
        
    },
    left_root: {
      height: 100,
      width: 100,
      color: "#A8D0E6",
      justifyContent:'center',
        
        

    },
    btn_root:{
      borderRadius: 100,
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: "#A8D0E6",
      padding: 10,
      justifyContent:'center',
      marginLeft: 20,

    }

    
  }));

export default function ArrowKeys(props) {
    const classes= useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100', width: '450' }}/>
        <div className={classes.root}>
        <button className={classes.btn_root}><ArrowBackIosIcon id="left" className={classes.left_root} fontSize={"large"} onClick={()=>{
          props.func(false)
          console.log("Left arrow clicked")
        }}
        ></ArrowBackIosIcon></button>
        <button className={classes.btn_root}><ArrowForwardIosIcon id="right" className={classes.right_root} fontSize={"large"} onClick={()=>{
          props.func(true)
          console.log("Right arrow clicked")}}

        ></ArrowForwardIosIcon></button>
        </div>
      </Container>
    </React.Fragment>
  );
}