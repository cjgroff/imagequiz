import React from 'react';
import {
    useParams

  } from "react-router-dom";
import quizzes from './Quizzes';
import Imagesquiz from './Imagesquiz';

/*
function Quiz (props){
        let { id } = useParams()
        console.log("Quiz ctor,props",props,id)
        return (
            <div>This Quiz {id}</div>
        )
    }  
*/
class Quiz extends React.Component{
    constructor(props){
        super(props)
        console.log("quiz ctor,props",props)
        this.state = {quiznum : -1}
    

    }
    render () {
        return(
            <div>
                quiz {"state:"+JSON.stringify(this.state)}
            </div>
        )
    }       
}  

    
   



export default Quiz;
