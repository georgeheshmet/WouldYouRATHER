export const GET_USERS = "GET_USERS"
export const ADD_USER_ANSWER = "ADD_USER_ANSWER"

export const GetUsers=(users)=>{
    return {
        type: GET_USERS,
        users
    }
}

export const AddAnswerUser=({authedUser, question_id, answer })=>{
    return {
        type: ADD_USER_ANSWER,
        authedUser,
        question_id,
        answer
    }
}