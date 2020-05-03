/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';
import PointBox from './PointBox'; 
import SaveCB from './SaveCB';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './RecentComments';

var app = window.require('electron').remote;
const fs = app.require('fs');


const commentsPath = './comments.json';
let commentsArray = require('./comments.json')


var commentList =[];
 //This function changes the word save to saved when clicked 
function flip(){
  document.getElementById("save").innerHTML ="Saved" 
}
//This funciton will add the word "Comment 1" to the  "Drag comment here" text area
function addComments() {
  document.getElementById("standard-full-width").value = "Add Comment";

  
  //commentList.push(comment.questionNum = document.getElementById("outlined-basic"),
  //                  comment.pointValue = document.getElementById);
  
}

var comment = {
  questionNum: "Question: 1a",
  pointVal: -4,
  commentText:"Need to show more work.",
  saved: false
}
const useStyles = makeStyles(theme => ({
   
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: 450,
    maxHeight: 10000
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  gridheader: {
      backgroundColor: theme.palette.background.paper,
      backgroundColor: '#F76C6C',
      color: "white",
      margin: "auto",
      textAlign: "center"
     
  },
  textField: {
      padding: theme.spacing(1),
      maxHeight: 50,
      color: '#374785'
  },
  leftText: {
      padding: theme.spacing(2.3),
  },
  addbtn:{
      paddding: theme.spacing(2.3),
      
  },


  button_root: {
    '& > *': {
      margin: theme.spacing(1),
      alignRight: 0,
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function NewCommentBox(props) {
   const classes = useStyles();
   const [comment, addComment] = React.useState(0);
   const [value, setValue] = React.useState();
   
   const handleCommentAdd = () => {
        addComment(
          appendjson(comment, commentsPath, function(){
            console.log('CommentList appended')
          })
        );

   
    };  

   
    const handleChange = (event) => {
      setValue(event.target.value);
    };
   

   

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} >


        <Grid item xs={12} className={classes.gridheader}>
            <Typography gutterBottom variant="header1">
                Student 1234
            </Typography>
        </Grid>

   
        <Grid container className="qNumGrid" xs={12}>
            <Grid item xs={5} className={classes.leftText}>
                <Typography variant="subtitle1">Question Number</Typography>
            </Grid>
            <Grid item xs={3} className={classes.textField}>
                <TextField size="small" id="outlined-basic" variant="outlined" />
            </Grid>
            <Grid item xs={4} className={classes.saveButton}>
            <CardActions>
                <SaveCB size="small" color='primary' id ="save" onClick={flip}>Save</SaveCB>
            </CardActions>
              </Grid>
            
        </Grid>


        <Grid container xs={12} justify="left" margin="auto">
            <Grid item xs={10} className={classes.leftText}>
                <Typography variant="title2" justify ="left"> Current Score: 87/100 </Typography>
            </Grid>
        </Grid>

        <Grid container xs={12} justify="left" margin="auto">
        <Grid item xs={3} className={classes.leftText}>
                <Typography variant="subtitle1">Points</Typography>
            </Grid>
            <Grid item xs={9} className={classes.textField}>

                <PointBox id="pointB"></PointBox>
            </Grid>
          </Grid>

       <Grid container xs={12} justify="left" margin="auto">
    
            <TextField
          id="standard-full-width"
          label="Comment"
          style={{ margin: 10}} 
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value ={value}
          onChange={handleChange}
          
        />
        </Grid>

        <CardActions>
            <div className={classes.button_root}>
                <Fab color="primary" aria-label="add" onClick={handleCommentAdd}>
                    <AddIcon />
                </Fab>
            </div>
                
        </CardActions>
        






      </Paper>
    </div>
  );
}
*/
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';

import SaveCB from './SaveCB';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './RecentComments';
import CommentList from './CommentList';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


var app = window.require('electron').remote;
const fs = app.require('fs');


const commentsPath = './comments.json';
let commentsArray = require('./comments.json')



function flip(){
  document.getElementById("save").innerHTML ="Saved" 
}
//This funciton will add the word "Comment 1" to the  "Drag comment here" text area
function addComments() {
  document.getElementById("standard-full-width").value = "Add Comment";

  
  //commentList.push(comment.questionNum = document.getElementById("outlined-basic"),
  //                  comment.pointValue = document.getElementById);
  
}

var comment = {
  questionNum: "Question: 1a",
  pointVal: -4,
  commentText:"Need to show more work.",
  saved: false
}
const useStyles = makeStyles(theme => ({
   
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: 450,
    maxHeight: 10000
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  gridheader: {
      backgroundColor: theme.palette.background.paper,
      backgroundColor: '#F76C6C',
      color: "white",
      margin: "auto",
      textAlign: "center"
     
  },
  textField: {
      padding: theme.spacing(1),
      maxHeight: 50,
      color: '#374785'
  },
  leftText: {
      padding: theme.spacing(2.3),
  },
  addbtn:{
      paddding: theme.spacing(2.3),
      
  },


  button_root: {
    '& > *': {
      margin: theme.spacing(1),
      alignRight: 0,
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

class NewCommentBox extends React.Component {
   
   //const [comment, addComment] = React.useState(0);
   //const [value, setValue] = React.useState();
   constructor(props){
     super(props);
     this.myRef = React.createRef();
     this.state = {
      tempQuestionNum: "",
      tempPointVal: 0,
      tempCommentText:"",
      tempSaved: false
      

      

     };
     



     this.handleCommentAdd = () => {
          this.setState({
              
          });
          
          commentsArray.comments[commentsArray.comments.length] = {questionNum:this.state.tempQuestionNum,pointVal:this.state.tempPointVal,commentText:this.state.tempCommentText,saved:this.state.tempSaved}
          fs.writeFile(commentsPath, JSON.stringify(commentsArray), function writeJSON(err) {
            if (err) return console.log(err);
            console.log(JSON.stringify(commentsArray));
            console.log('writing to ' + commentsPath);
           
          });

          this.render();
      }
    

      

   };
   handleSave = () => {
    this.tempSaved = true;
  }
   //Handles PointBox
   onClickPlus = () => {
    const currentValue = Number(this.myRef.current.value) || 0;
    console.log(currentValue)
    this.myRef.current.value = currentValue + 1;
    this.state.tempPointVal = this.myRef.current.value;
   }

   onClickMinus = () => {
    const currentValue = Number(this.myRef.current.value) || 0;
    this.myRef.current.value = currentValue - 1;
    this.state.tempPointVal = this.myRef.current.value;
    }
  render() {

  return (
    <div style= {{flexGrow: 1}}>
      <Paper style={{ margin: 'auto', width: 450, maxHeight: 10000}}>


        <Grid item xs={12} style={{backgroundColor: '#F76C6C', color: "white", margin: "auto", textAlign: "center"}}>
            <Typography gutterBottom variant="header1">
                Student 1234
            </Typography>
        </Grid>

   
        <Grid container className="qNumGrid" xs={12}>
            <Grid item xs={5} style = {{padding: 10}}>
                <Typography variant="subtitle1">Question Number</Typography>
            </Grid>
            <Grid item xs={3}>
                <TextField size="small" id="outlined-basic" variant="outlined" onChange={(e) => this.setState({tempQuestionNum:e.target.value})} />
            </Grid>
            <Grid item xs={4}>
            <CardActions style={{bottom: 10}}>
           
                <SaveCB size="small" color='primary' id ="save" onClick={this.handleSave}>Save</SaveCB>
            </CardActions>
              </Grid>
            
        </Grid>


        <Grid container xs={12} justify="left" margin="auto">
            <Grid item xs={10}>
                <Typography variant="title2" justify ="left"> Current Score: 87/100 </Typography>
            </Grid>
        </Grid>

        <Grid container xs={12} justify="left" margin="auto">
        <Grid item xs={3} style={{padding: 10}}>
                <Typography variant="subtitle1">Points</Typography>
            </Grid>
            <Grid item xs={9}>
            <div  >



              <Button variant="contained" color="primary" 
                onClick = {this.onClickMinus} 
              >
               -
              </Button>

              <TextField  style= {{paddingRight:"5px", paddingLeft:"5px", paddingTop: "6px", width:"100px"}}  size="small"  variant="outlined" value={this.currentPointValue} onChange={(e) => this.setState({tempPointVal:e.target.value})}  inputRef={this.myRef}/> 

              <Button  variant="contained" color="primary"
                  onClick = {this.onClickPlus} 
              >
                  +
              </Button>

              </div>
                
            </Grid>
          </Grid>

       <Grid container xs={12} justify="left" margin="auto">
    
            <TextField
          id="standard-full-width"
          label="Comment"
          style={{ margin: 10}} 
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value ={this.value}
          onChange={(e) => this.setState({tempCommentText:e.target.value})}
          
        />
        </Grid>

        <CardActions>
            <div>
                <Fab color="primary" aria-label="add" onClick={this.handleCommentAdd}>
                    <AddIcon />
                </Fab>
            </div>
                
        </CardActions>
        






      </Paper>
      <CommentList></CommentList>
    </div>
    
  );
  }
} export default withStyles(useStyles) (NewCommentBox);