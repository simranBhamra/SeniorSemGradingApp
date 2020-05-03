import React from 'react';
import '../Components/CommentBox/comments.json';

//var app = window.require('electron').remote;
//const fs = app.require('fs');

//const commentDataPath = '../Components/CommentBox/comments.json';
var commentData = require('../Components/CommentBox/comments.json')

function Export(){
    function convertToCSV(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
    
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','
    
                line += array[i][index];
            }
    
            str += line + '\r\n';
        }
    
        return str;
     }

    
    function exportCSVFile(headers, items, fileTitle) {
        if (headers) {
            items.unshift(headers);
        }
    
        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);
    
         var csv = convertToCSV(jsonObject);
       

        var exportedFilenmae = fileTitle + '.csv' || 'export.csv';
    
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, exportedFilenmae);
        } else {
            var link = document.createElement("a");
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", exportedFilenmae);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }
    
    function download(){
      var headers = {
          questionNum: 'Question Number'.replace(/,/g, ''), // remove commas to avoid errors
          pointVal: "Point Value",
          commentText: "Comment",
       
      };
    console.log(commentData);
      var itemsNotFormatted =  commentData.comments
      //[

      
        //   {
        //     questionNum: commentData.comments[0].questionNum,
        //     pointVal: commentData.comments[0].pointVal,
        //     commentText:commentData.comments[0].commentText,
        //   },
       
     // ];

    // var itemsNotFormatted = JSON.parse(commentData); 

    itemsNotFormatted.forEach((item) => {
        Object.entries(item).forEach(([key, val]) => {
          console.log(`key-${key}-val-${JSON.stringify(val)}`)
        });
      });
    
     var itemsFormatted = [];
    
      // format the data


      itemsNotFormatted.forEach((item) => {
          itemsFormatted.push({
              questionNum: item.questionNum.replace(/,/g, ''), // remove commas to avoid errors,
              pointVal: item.pointVal,
              commentText: item.commentText,
              
          });
      });
    
      var fileTitle = 'testcomments'; 
    
      //exportCSVFile(headers, commentData, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
      exportCSVFile(headers, itemsFormatted, fileTitle);
    }
    

    return (
        <div className = "Export">
            <h1 style={{  color: 'black' }}> File downloaded </h1>
            <button onClick = {download()}>file download</button>
        </div>
    );
}

export default Export; 




