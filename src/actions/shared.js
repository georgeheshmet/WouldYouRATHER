import { _getQuestions, _getUsers } from '../utils/_DATA'
import { GetUsers , AddAnswerUser, AddUserQues} from './users'
import { GetQuestions, SaveAnswer, AddQuestion } from './questions'
import { _saveQuestionAnswer, _saveQuestion }  from '../utils/_DATA'
import { showLoading, hideLoading  } from 'react-redux-loading'



export const HandleGetData =()=>{
    return (dispatch)=>{
        dispatch(showLoading())
        return Promise.all([_getQuestions(), _getUsers()]).then(([questions, users])=>{

            dispatch(GetUsers(users))
            dispatch(GetQuestions(questions))
            dispatch(hideLoading())
        }).catch((e)=>(alert(`${e} failed to get data from server`)))
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

export const HandleAddQuestion=({optionOne, optionTwo})=>{
    return(dispatch,getState)=>{
                const { authedUser }=getState()
                const optionOneText=optionOne
                const optionTwoText= optionTwo
                const author = authedUser
        return _saveQuestion({optionOneText, optionTwoText, author}).then((question)=>{
            dispatch(AddQuestion(question))
            dispatch(AddUserQues(question))
        }).catch((e)=>(alert(`Error ${e}`)))
    }
}