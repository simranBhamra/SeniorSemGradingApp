import React from 'react'

class PDFJs extends React.Component{
    constructor(props){
        super(props);
        this.iframe = document.createElement('iframe');
        
    }

    update = (source, element, file) =>{
        var url = URL.createObjectURL(file)
        console.log(url)
        this.iframe.src= './pdfjs-2.2.228-dist/web/viewer.html?file='+ url;

        element.appendChild(this.iframe)
    }

    init = (source, element, file) =>{

        
        //file = props.file;

        var url = URL.createObjectURL(file)

        this.iframe.src= './pdfjs-2.2.228-dist/web/viewer.html?file='+ url;
        this.iframe.width='100%'
        this.iframe.height='900'
        

        element.appendChild(this.iframe);
    }
}

export default PDFJs;