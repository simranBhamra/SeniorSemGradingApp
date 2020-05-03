import React from 'react';
import ButtonAppBar from '../Components/NavBar'; 

import NewCommentBox from '../Components/CommentBox/NewCommentBox'
import PDFViewer from '../Components/PDF Viewer/Pdf';
import PDFJSBackendAns from '../Components/PDF Viewer/pdf_backend_ansKey'
import PDFJSBackendStu from '../Components/PDF Viewer/pdf_backend_studentSub'
import {Document} from 'react-pdf'
import './Question1.css';
//import {Rectangle} from 'react-shapes';
import ArrowKeys from '../Components/ArrowKeys';
import {useState, useEffect} from 'react'



function Question1Page(props) {

  

  var title = props.location.state.title;
  var points = props.location.state.points;
  var answerKey = props.location.state.answerKey;
  var studentSubs = props.location.state.studentSubs;
  

  const [studentNum, setStudentNum] = useState(0);

  function updateStudentSubs(right){
      if(right){
        if(studentNum < (studentSubs.length - 1))
        setStudentNum(studentNum+1)
      }
      else{
        if(studentNum > 0){
            setStudentNum(studentNum-1)
        }
      }
  }



  return (
    <div className="question">

      <header className="App-header">
      
      </header>
      <body>
        <div className = "labels"> 
          <div id ="ansLabel">Answer Key</div>
          <div id ="studentLabel">Student Submission</div>
        </div>
      
        <div className = "PDFViewers">
         <div className ="ansKey">
          {/* <Rectangle width={625} height={801.636}> </Rectangle> */}
            <PDFViewer
                backend={PDFJSBackendAns}
                file = {answerKey}
            />
         </div>

         <div className = "studentTest">
            <PDFViewer
                id = "student"
                backend={PDFJSBackendAns}
                file = {studentSubs[studentNum]}
                src = '/myPDF.pdf'
            />
         </div>
        </div>

        <div className = "rightPanel">
          <NewCommentBox></NewCommentBox>
        
          <ArrowKeys num={studentNum} func={updateStudentSubs}></ArrowKeys>
        </div>
        
      </body>
    </div>
  );
}

export default Question1Page;
