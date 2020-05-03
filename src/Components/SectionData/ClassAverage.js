import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class ClassAverage extends Component{
    constructor(props){
        super(props);
        this.state = {
           chartData:props.chartData
        }
    }

    render(){
        return(
            <div className="ClassAverage">
                <Bar
                data={{
                    labels:["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%"],
                    datasets:[{
                        type:"bar",
                        label:"Student Grades for this Section",
                        data:[0, 0, 0, 0, 2, 6, 8, 12, 5, 1], 
                        backgroundColor:"#374785"
                    },{
                        type:"bar",
                        label:"Student Grades for this Assignment",
                        data:[0, 0, 0, 0, 0, 7, 15, 8, 2, 1],
                        backgroundColor:"#F76C6C"
                    }],
                }}
                options={{
                    title:{
                        text:"Test 1 Grades by Percentile",
                        display:true,
                        fontSize:40,
                        fontFamily:["Roboto", "sans-serif"]
                    }
                }}
                />
            </div>
        )
    }
}

export default ClassAverage;