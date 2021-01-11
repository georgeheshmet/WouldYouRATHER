import { GET_USERS, ADD_USER_ANSWER } from '../actions/users'
export const users =(state={} , action)=>{

    switch (action.type){
        case GET_USERS:
            return { ...action.users}
        case ADD_USER_ANSWER:
            const {authedUser, question_id, answer } = action
            return {
                ...state,[authedUser]: {...state[authedUser], answers:{ ...state[authedUser].answers,[question_id]: answer}}
            }
    }
    return state
}