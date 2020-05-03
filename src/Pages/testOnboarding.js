// import React, {useCallback} from 'react'
// import Upload from '../Components/Upload/Upload'
// import { makeStyles } from '@material-ui/core/styles';
// import './testOnboarding.css'
// import NumericInput from 'react-numeric-input'
// import Input from '@material-ui/core/Input'
// import Button from '@material-ui/core/Button'
// import Center from 'react-center'
// import {Link} from 'react-router-dom'
// import {useState} from 'react'


// export default function TestOnboarding(){

//     const [title, setTitle] = useState('');
//     const [answerKey, setAnswerKey] = useState();
//     const [studentSubs, setStudentSubs] = useState();
//     const [points, setPoints] = useState(0);

//     function save(){
//         console.log(title)
//         console.log(points)
      

//         let data = [title, answerKey, studentSubs, points]
//     }

//     return(
//         <div>
//             <Center>
//             <div className = "full">
//                 <div>
//                     <div className="left">Exam Title:</div>
//                     <Input className="right"
//                     placeholder="Title"
//                     onChange={e=> setTitle(e.target.value)}></Input>
//                 </div>
//                 <div>
//                     <div className="left">Import Answer Key:</div>
//                     <input type="file"
//                     onChange={e=> setAnswerKey(e.target.files[0])}></input>
//                 </div>
//                 <div>
//                     <div className="left">Import Student Sub:</div>
//                     <input type="file" multiple
//                     onChange={e=> setStudentSubs(e.target.files)}></input>
//                 </div>
//                 <div>
//                     <div className="left">Total Exam Points:</div>
//                     <Input className="right"
//                     type="number"
//                     onChange={e=> setPoints(e.target.value)}
//                     ></Input>
//                 </div>
//                 <div>
//                     <Link 
//                     to={{
//                         pathname:"/question",
//                         state:{
//                             title: title,
//                             answerKey: answerKey,
//                             studentSubs: studentSubs,
//                             points: points}
//                         }}>
//                         <Button variant="contained"
//                         color="primary"
//                         onClick={()=>{
//                             save()
//                         }}
//                         style={{width:"200px", marginLeft:"450px", marginTop:"25px"}}>
//                             Start Grading!
//                         </Button>
//                     </Link>
//                 </div>
//             </div>
//             </Center>
//         </div>
//     )

// }

import React, {useCallback} from 'react'
import Upload from '../Components/Upload/Upload'
import { makeStyles } from '@material-ui/core/styles';
import './testOnboarding.css'
import NumericInput from 'react-numeric-input'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Center from 'react-center'
import {Link} from 'react-router-dom'
import {useState} from 'react'


export default function TestOnboarding(){

    const [title, setTitle] = useState('');
    const [answerKey, setAnswerKey] = useState();
    const [studentSubs, setStudentSubs] = useState();
    const [points, setPoints] = useState(0);

    function save(){
        console.log(title)
        console.log(points)
        //console.log(answerKey.name)
     //   console.log(studentSubs[1].name)

        let data = [title, answerKey, studentSubs, points]
    }

    return(
        <div>
            <Center>
            <div className = "full">
                <div>
                    <div className="left">Exam Title:</div>
                    <Input className="right"
                    placeholder="Title"
                    onChange={e=> setTitle(e.target.value)}></Input>
                </div>
                <div>
                    <div className="left">Import Answer Key:</div>
                    <input type="file"
                    onChange={e=> setAnswerKey(e.target.files[0])}></input>
                </div>
                <div>
                    <div className="left">Import Student Sub:</div>
                    <input type="file" multiple
                    onChange={e=> setStudentSubs(e.target.files)}></input>
                </div>
                <div>
                    <div className="left">Total Exam Points:</div>
                    <Input className="right"
                    type="number"
                    onChange={e=> setPoints(e.target.value)}
                    ></Input>
                </div>
                <div>
                    <Link 
                    to={{
                        pathname:"/question",
                        state:{
                            title: title,
                            answerKey: answerKey,
                            studentSubs: studentSubs,
                            points: points}
                        }}>
                        <Button variant="contained"
                        color="primary"
                        onClick={()=>{
                            save()
                        }}
                        style={{width:"200px", marginLeft:"450px", marginTop:"25px"}}>
                            Start Grading!
                        </Button>
                    </Link>
                </div>
            </div>
            </Center>
        </div>
    )

}