import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class GradeGraph extends Component{
    constructor(props){
        super(props);
        this.state = {
           chartData:props.chartData
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:"right"
    }

    render(){
        return (
            <div className="gradeGraph">
               <Bar
                data={{
                    labels: ['Zach', 'Sim', 'David', 'Juvany', 'Mike F.', 'Mike V.', 'Matt'],
                    datasets:[{
                      label:"Grade",
                      data:[
                        69.024,
                        99.9,
                        78,
                        61,
                        82,
                        95,
                        74
                      ],
                      backgroundColor: "#374785",
                      hoverBorderColor: "#fff",
                      hoverBorderWidth: "2px"
                    }]
                  }}
                
                options={{
                    title:{
                        display:this.props.displayTitle,
                        text:"Student's Grades",
                        fontSize:30
                    },
                    legend:{
                        display:this.props.displayTitle,
                        position:this.props.legendPosition
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
                width={600}
               />
            </div>
        )
    }
}

export default GradeGraph;