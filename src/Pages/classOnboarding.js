

import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


var app = window.require('electron').remote;
const fs = app.require('fs');

const classDataPath = './src/Data/ClassData.json';
var classData = require('../Data/ClassData.json')


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

const DialogTitle = withStyles(useStyles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});


const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);



class  ClassOnboardStepper extends React.Component {

  constructor(){
    super();
    this.state = {
      activeStep:0,
      steps:3,
     
      setOpen:false,
      tempClassName:'',
      tempCourse:'',
      tempStudentNum:0
      
    };


  

this.handleNext = () => {
  this.setState({
    activeStep:this.state.activeStep+1
  })
  console.log(this.state.activeStep)
  ;
};

this.handleBack = () => {
  this.setState({
    activeStep:this.state.activeStep-1
  });
};

this.handleReset = () => {
  this.setState({
    activeStep:0
  });
};


this.handleClickOpen = () => {
  this.setState({
    setOpen: true,
    activeStep:0
  });
};

this.handleClose = () => {
  this.setState({
    setOpen:false
  });
};

this.handleSave= () => {
  this.setState({

    setOpen:false
  });
  console.log(classData.classes)
  classData.classes[classData.classes.length] = {className:this.state.tempClassName,course:this.state.tempCourse,studentNum:this.state.tempStudentNum}
  // classData.classes[classData.classes.length+1].className = this.state.tempClassName
  // classData.classes[classData.classes.length+1].course = this.state.tempCourse
  // classData.classes[classData.classes.length+1].studentNum = this.state.tempStudentNum
  fs.writeFile(classDataPath, JSON.stringify(classData), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(classData));
    console.log('writing to ' + classDataPath);
  });

};


  };
  render(){

  return (
    <div >
       <Button variant="contained" color="primary" onClick={this.handleClickOpen} style={{ backgroundColor: '#F76C6C' , color:'white',marginBottom: '20px',marginLeft:'700px'  ,marginTop: '50px'}}>
        Add a new course!
      </Button>

      <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.setOpen}>
        

        <DialogContent dividers>

      <Stepper activeStep={this.state.activeStep} orientation="vertical">
          <Step key={"Welcome"}>
            <StepLabel>{"Welcome"}</StepLabel>
            <StepContent>
              <Typography> Welcome to the course grading application class wizard.Please enter the name of the class.</Typography>
              <div >
                <div>
                <TextField id="outlined-basic" label="Course Name" variant="outlined" 
                 onChange={(e) => this.setState({tempClassName:e.target.value})}/>
                  <Button
                    disabled={this.state.activeStep === 0}
                    onClick={this.handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    
                  >
                    {this.state.activeStep === this.state.steps - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>


          <Step key={"Add a class"}>
            <StepLabel>{"Add a class"}</StepLabel>
            <StepContent>
              <Typography> Add your course code. </Typography>
              <div >
                <div>
                <TextField id="outlined-basic" label="Course Code" variant="outlined" 
                onChange={(e) => this.setState({tempCourse:e.target.value})}/>
                  <Button
                    disabled={this.state.activeStep === 0}
                    onClick={this.handleBack}
                   
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    
                  >
                    {this.state.activeStep === this.state.steps - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
       
       
          <Step key={"Student"}>
            <StepLabel>{"Students"}</StepLabel>
            <StepContent>
              <Typography> How many students are in this class?  </Typography>
              <div >
                <div>
                <TextField id="outlined-basic" label="Student Amount" variant="outlined"
                onChange={(e) => this.setState({tempStudentNum:e.target.value})}/>   
                  <Button
                    disabled={this.state.activeStep === 0}
                    onClick={this.handleBack}
                    
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    
                  >
                    {this.state.activeStep === this.state.steps - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
      </Stepper>
     

      {this.state.activeStep === this.state.steps && (
        <Paper square elevation={0} >
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={this.handleReset} >
            Reset
          </Button>
        </Paper>
      )}
 </DialogContent>
      <DialogActions>
          <Button autoFocus onClick={this.handleSave} color="primary">
            Close
          </Button>
        </DialogActions>
  </Dialog>
    
    </div>
  );
}
}
 export default withStyles(useStyles) (ClassOnboardStepper); 

