import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CourseTitle from '../Components/CourseTitleCard';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {Link} from'react-router-dom';
import ClassOnboardStepper from '../Pages/classOnboarding';
import TestOnboarding from './testOnboarding';
import dataSummary from './dataSummary'; 
import Button from '@material-ui/core/Button';
import Export from './Export';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));



export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


<Grid container spacing={10}>
        <Grid item xs={12}>
          <h1 style={{ color: '#F76C6C', paddingLeft: '50px', paddingRight: '80px' }}>Hi User,</h1>
          <h2 style={{ color: '#374785', paddingLeft: '50px', paddingRight: '80px' }}>Your Courses</h2>
        </Grid>


 <Grid container spacing={7}>
    <CourseTitle></CourseTitle>
    
</Grid>


  <Grid>
     <ClassOnboardStepper></ClassOnboardStepper>    
</Grid>
      

      

      {/* <Link to = '/addtest'>
        <Grid>
        <Button renderAs="button" variant="contained" size="medium" color="white" className={classes.button} style={{ backgroundColor: '#F76C6C' , color:'white',marginBottom: '20px',marginLeft:'50px'  ,marginTop: '50px'}}>
            <div className={classes.buttonText}>Add a new test</div>
        </Button>
        </Grid>
      </Link> */}

      <Link to = '/datasummary'>
        <Grid>
        <Button renderAs="button" variant="contained" size="medium" color="white" className={classes.button} style={{ backgroundColor: '#F76C6C' , color:'white',marginBottom: '20px',marginLeft:'50px'  ,marginTop: '50px'}}>
            <div className={classes.buttonText}>Class Summary</div>
        </Button>
        </Grid>
      </Link>

      <Link to = '/export'>
        <Grid>
        <Button renderAs="button" variant="contained" size="medium" color="white" className={classes.button} style={{ backgroundColor: '#F76C6C' , color:'white',marginBottom: '20px',marginLeft:'50px'  ,marginTop: '50px'}}>
            <div className={classes.buttonText}>Export File</div>
        </Button>
        </Grid>
      </Link>
     

</Grid>


    </div>
  );
}