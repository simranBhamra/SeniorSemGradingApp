import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {Link} from'react-router-dom';
import Grid from '@material-ui/core/Grid';


var app = window.require('electron').remote;
const fs = app.require('fs');

const classDataPath = './src/Data/ClassData.json';
var classData = require('../Data/ClassData.json')

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 1000,
    minHeight:25,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  paper: {
    padding: theme.spacing(2),
    width: 1200,
    //maxHeight: 70,
    minHeight:25,
    marginLeft: '100px',
    
   
  },
  title: {
    fontSize: 14,
  },
  body:{
    alignSelf: "end"
  },

  pos: {
    marginBottom: 12,
    marginLeft: 10,
  },
}));

export default function CourseTitle() {
  const classes = useStyles();
 

  return (
    <div>
    
        {classData.classes.map(element=>( 
          <Card className={classes.paper} style ={{ color: "white", marginTop: '25px',marginBottom: '25px', minWidth: "100%"}}>
           
          <CardContent >
       
           <Typography variant="h6"   style ={{ color: "#374785"}} >
           {element.course}
           &nbsp;
            {element.className}  

            
             
            </Typography>

            <Link to = '/addtest'>
        <Button renderAs="button" variant="contained" size="medium" color="white" className={classes.button} style={{ backgroundColor: '#F76C6C' , color:'white' , marginLeft: '1000px'}}>
            <div className={classes.buttonText}>Test Quick Add</div>
        </Button>
      </Link>    
  

          </CardContent>
        
          </Card>
        ))}
      

      
    
  </div>
    
    
  );
}