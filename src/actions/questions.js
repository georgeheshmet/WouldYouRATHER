

export const GET_QUESTIONS = "GET_QUESTIONS"
export const SAVE_ANSWER_TO_QUESTION = "SAVE_ANSWER_TO_QUESTION"
export const ADD_QUESTION = "ADD_QUESTION"

export const GetQuestions=(questions)=>{
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export const SaveAnswer=({authedUser, question_id, answer })=>{
    return {
        type: SAVE_ANSWER_TO_QUESTION,
        authedUser,
        question_id,
        answer
    }
}

export const AddQuestion =(question)=>{
    return {
        type: ADD_QUESTION,
        question
    }

}
