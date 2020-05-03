import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';


var app = window.require('electron').remote;
const fs = app.require('fs');

const commentsPath = './comments.json';
let commentsArray = require('./comments.json')



 
const useStyles = makeStyles(theme => ({
  root: {
    height: 300,

    '& .MuiTextField-root': {
     margin: theme.spacing(1),
     //width: 300,
     backgroundColor: "#F8E9A1",
     
     
    },
    
    
  },
  comment:{
    width: 300,
    margin: theme.spacing(1),
    backgroundColor: "#F8E9A1",
    
  },
  point: {
    width: 50,
    margin: theme.spacing(1),
    backgroundColor: "#F8E9A1",
    display: 'inline-block'
  },
  divider: {
    height: 28,
    margin: 4,
  },
  
}));


export default function RecentCommentBox() {
  
 
  const classes = useStyles();
  const [value, setValue] = React.useState();
  
 
   
    return (
    
      <form id= 'RecentCommentsContainer' className={classes.root} noValidate autoComplete="off">
         {commentsArray.comments.map((element)=>
          <div>
          <TextField
            id="Comment"
            className = {classes.comment}
            label={element.questionNum}
            multiline
            rowsMax="4"
            value = {element.commentText}
            variant="outlined"
            InputProps = {{
              readOnly: true,
            }}
              
            />
            <TextField
            id="Comment"
            className = {classes.point}
            
            multiline
            rowsMax="4"
            value = {element.pointVal}
            variant="outlined"
            InputProps = {{
              readOnly: true,
            }}
              
            />
            
          
         
          </div>

        
                  
         )}
          
      </form>
    );
   }
   
