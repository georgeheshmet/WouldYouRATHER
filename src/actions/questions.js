import { Redirect } from 'react-router-dom'

export const GET_QUESTIONS = "GET_QUESTIONS"

export const GetQuestions=(questions)=>{
    return {
        type: GET_QUESTIONS,
        questions
    }
}



