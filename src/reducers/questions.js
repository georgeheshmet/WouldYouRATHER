import { GET_QUESTIONS } from '../actions/questions'
export const questions =(state={} , action)=>{

    switch (action.type){
        case GET_QUESTIONS:
            return { ...action.questions}
    }
    return state
}