import { GET_USERS, ADD_USER_ANSWER, ADD_USER_QUESTION } from '../actions/users'
export const users =(state={} , action)=>{

    switch (action.type){
        case GET_USERS:
            return { ...action.users}
        case ADD_USER_ANSWER:
            const {authedUser, question_id, answer } = action
            console.log("users",{questions:[...state[authedUser].questions, question_id]})
            return {
                ...state,[authedUser]: {...state[authedUser], answers:{ ...state[authedUser].answers,[question_id]: answer} }
            }   
        case ADD_USER_QUESTION:
            return {
                ...state, [action.authedUser] : {...state[action.authedUser], questions: [ ...state[action.authedUser].questions, action.question_id]}
            }
           default:
                return state  
    }
}