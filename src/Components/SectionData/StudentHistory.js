import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class StudentHistory extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }

    render(){
        return(
            <div className="studentHistory">
                <Bar
                data={{
                    datasets:[{
                        label: "Rolling Average",
                        data: [65, 80, 95, 70],
                        type: "line",
                        backgroundColor: "#24305E",
                        
    
                    },{
                        label: "Assignment Grade",
                        data: [90, 95, 95, 55],
                        type: "bar",
                        backgroundColor: "rgba(168, 208, 230, .6)",
                        barThickness: '200'
                    }],
                    labels: ["Chapter 3 Quiz", "Unit 1 Test", "Chapter 4 Quiz", "Chapter 5 Project"]
                }}

                options={{
                    title: {
                        display:true,
                        text:"Zach Pavlovich's Grades",
                        fontSize:30
                    },
                    legend:{
                        position:"right"
                    },
                    scales: {
                        yAxes: [{
                            ticks:{
                                beginAtZero:true
                            }
                        }]
                    }
                }}
                height={300}
                width={500}
                   
                ></Bar>
            </div>
            
        );
    }
}



export default StudentHistory;