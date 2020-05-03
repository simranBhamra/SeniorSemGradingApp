export default class PDFJs{
    init = (source, element) =>{
        const iframe = document.createElement('iframe');
        
        //file = 'Sample Student Test.pdf'
        
        iframe.src= './pdfjs-2.2.228-dist/web/viewer.html?file=SampleStudentTest.pdf';
        iframe.width='100%'
        iframe.height='900'
        

        element.appendChild(iframe);
    }
}