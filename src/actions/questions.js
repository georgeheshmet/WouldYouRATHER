import { Redirect } from 'react-router-dom'

export const GET_QUESTIONS = "GET_QUESTIONS"
export const SAVE_ANSWER_TO_QUESTION = "SAVE_ANSWER_TO_QUESTION"

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

