import React from 'react';
import Card from '@material-ui/core/Card';
import {Table, TableHead, TableRow, TableCell, TableBody, Grid} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import ClassAverage from '../Components/SectionData/ClassAverage';
import CardContent from '@material-ui/core/CardContent';

function createData(name, studentID) {
    return{name, studentID};
}
const sampleData = [ 
     createData("John Smith", 1892235),
     createData("Jane Doe", 1984467),
     createData("Un Known", 1242235),
     createData("Steven Green", 4267235),
     createData("Lucy Green", 3267238),
     createData("Purple Tree", 1263239),
     createData("Susan Blue", 1793232)
]

function createTest(testName, testDate, average) {
    return {testName, testDate, average};
}

const sampleTests = [
    createTest("Test 1", "19/01/2020", 85),
    createTest("Test 2", "25/03/2020", 76),
    createTest("Quiz 1", "10/02/2020", 95)
]

export default function dataSummary(){
    return (
        <div className ="datasummary">
            <div className = "title">
                <h1 style={{ color: '#374785', paddingLeft: '80px', paddingRight: '80px' }}> MA 234 Linear Algebra</h1>
                <h2 style={{ color: '#374785', paddingLeft: '80px', paddingRight: '80px'}}><em>Course Data</em></h2>
            </div> 

            <Grid container 
            spacing={3}
            justify="space-between">
                <Grid item xs={12} sm={3} style={{ paddingLeft: '50px' }}>
                    <Card>
                        <CardHeader title="Class Roster" style={{background: "#F76C6C", color: "white"}} />
                        <CardContent>
                            <Table stickyHeader> 
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{background: "#F76C6C", color: "white", fontWeight: "bold"}}>Name</TableCell>
                                        <TableCell align="right" style={{background: "#F76C6C", color: "white", fontWeight: "bold"}}>DSU ID</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {sampleData.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.studentID}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                </Grid>

                <Grid item xs={12} sm={6}>
                    <div className="classAverageGraph">
                        <ClassAverage />
                    </div>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Card>
                        <CardHeader className="quizListHeader" title="Tests and Quizzes" 
                        style={{background:"#374785", alignSelf: "right",
                        color: "white"}}/>
                        <CardContent>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{background:"#374785", color: "white"}}>Test Name</TableCell>
                                        <TableCell align="center" style={{background:"#374785", color: "white"}}>Test Date</TableCell>
                                        <TableCell align="right" style={{background:"#374785", color: "white"}}>Class Average</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {sampleTests.map((row) => (
                                        <TableRow key={row.testName}>
                                            <TableCell component="th" scope="row">
                                                {row.testName}
                                            </TableCell>
                                            <TableCell align="center">{row.testDate}</TableCell>
                                            <TableCell align="right">{row.average}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Grid>

           


            </Grid>
        </div>
        
    )
}

