import { _getQuestions, _getUsers } from '../utils/_DATA'
import { GetUsers , AddAnswerUser} from './users'
import { GetQuestions, SaveAnswer } from './questions'
import { _saveQuestionAnswer } from '../utils/_DATA'
import { showLoading, hideLoading  } from 'react-redux-loading'

export const HandleGetData =()=>{
    return (dispatch)=>{
        dispatch(showLoading())
        return Promise.all([_getQuestions(), _getUsers()]).then(([questions, users])=>{

            dispatch(GetUsers(users))
            dispatch(GetQuestions(questions))
            dispatch(hideLoading())
        }).catch(console.log("failed to get data from server"))
    }
    }

export const HandleAnswer=({authedUser, question_id, answer })=>{

        return(dispatch)=>{
            return(_saveQuestionAnswer({authedUser, question_id, answer })).then(()=>{
                dispatch(SaveAnswer({authedUser, question_id, answer }))
                dispatch(AddAnswerUser({authedUser, question_id, answer }))
            })
        }

}