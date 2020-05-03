import React from 'react';
import ButtonAppBar from './Components/NavBar'; 
import {HashRouter as Router, Switch, Route } from 'react-router-dom'; 
import Question1Page from './Pages/Question1';
import HomePage from './Pages/Homepage';
import classOnboarding from './Pages/classOnboarding';
import dataSummary from './Pages/dataSummary';
import testOnboarding from './Pages/testOnboarding';
import Export from './Pages/Export';


function App(){
  return (

      <Router>
      <div className = "App">
      <ButtonAppBar></ButtonAppBar>
      

           <Switch>  
        
              <Route path = "/" exact component = {HomePage}/> 
              <Route path = "/question" component = {Question1Page}/>
             
              <Route path = "/datasummary" component = {dataSummary}/>
              <Route path = "/addtest" component = {testOnboarding}/>
              <Route path = "/export" component = {Export}/>
              
          </Switch>
         
      </div>
      </Router>
  );
}



export default App; 
