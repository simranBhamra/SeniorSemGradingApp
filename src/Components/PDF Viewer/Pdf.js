import React from 'react';

export default class PDFViewer extends React.Component{

    constructor(props){
        super(props);
        this.viewerRef = React.createRef();
        this.backend = new props.backend();
        
    }

    componentDidMount(){
        const {src} = this.props;
        const element = this.viewerRef.current;
        const file = this.props.file
        console.log(file)
        
        this.backend.init(src, element, file);
    }

    componentDidUpdate(){
        const {src} = this.props;
        const element = this.viewerRef.current;
        const file = this.props.file
        console.log(file)
        
        this.backend.update(src, element, file, this.props.num)
    }

    

    render(){
        return(
            <div ref={this.viewerRef} id='viewer' style={{width: '625', height: '801.636'}}>

            </div>
        )
    }
}