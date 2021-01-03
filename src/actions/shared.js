import { _getQuestions, _getUsers } from '../utils/_DATA'
import { GetUsers } from './users'
import { GetQuestions } from './questions'
import { SetAuthUser } from './authedUser'

export const HandleGetData =()=>{
    return (dispatch)=>{
        return Promise.all([_getQuestions(), _getUsers()]).then(([questions, users])=>{
            dispatch(GetUsers(users))
            dispatch(GetQuestions(questions))
            //dispatch(SetAuthUser(null))
        }).catch(console.log("failed to get data from server"))
    }
    }