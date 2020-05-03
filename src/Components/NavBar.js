import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import styled from "styled-components";
import { styled } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';
import {Link} from'react-router-dom';


const MyAppBar = styled(AppBar)({
  background: '#F8E9A1',
  color: '#374785',

});


export default function StyledComponents() {
  //const classes = useStyles();

  return (
    <div >
      <MyAppBar position="static">


<Toolbar variant="dense">
          <Grid container>
            {/* <Grid item>
            <IconButton   edge="start"  color="inherit"  aria-label="menu" >
              <MenuIcon fontSize="large" />
            </IconButton>
            </Grid> */}
            <Grid>


              <Grid item>
              <Typography variant="h6" >
            Math Grading Application 
          </Typography>
              </Grid>

            </Grid>
          </Grid>
          
          <Link to = '/'>
          <Grid>
            <IconButton edge="end"   style={{color:"white"}} aria-label="menu">
              <HomeIcon fontSize="large" />
            </IconButton>
          </Grid>
          </Link>

        </Toolbar>
      </MyAppBar>
    </div>
  );
}