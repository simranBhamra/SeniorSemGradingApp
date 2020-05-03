import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Center from 'react-center'
import './Upload.css';

export default function Upload(props){

    return(
        <div style={{display:"inline-block", marginLeft: "100px"}}>
                        {props.multiple ? 
                             <input type="file" name="file" webkitdirectory multiple></input>:
                             <input id="myInput" type="file"></input>
                        }
        </div>


    );

}