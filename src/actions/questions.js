
import {_saveQuestion } from '../utils/_DATA'
export const GET_QUESTIONS = "GET_QUESTIONS"
export const SAVE_ANSWER_TO_QUESTION = "SAVE_ANSWER_TO_QUESTION"
export const ADD_QUESTION = "ADD_QUESTION"
export const GetQuestions=(questions)=>{
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export const SaveAnswer=({authedUser, qid, answer })=>{
    return {
        type: SAVE_ANSWER_TO_QUESTION,
        authedUser,
        qid,
        answer
    }
}

const AddQuestion =(question)=>{
    return {
        type: ADD_QUESTION,
        question
    }

}
export const HandleAddQuestion=({optionOne, optionTwo})=>{
    return(dispatch,getState)=>{
                const { authedUser }=getState()
                const optionOneText=optionOne
                const optionTwoText= optionTwo
                const author = authedUser
        return _saveQuestion({optionOneText, optionTwoText, author}).then((question)=>{
            dispatch(AddQuestion(question))
        }).catch((e)=>(alert(`Error ${e}`)))
    }
}