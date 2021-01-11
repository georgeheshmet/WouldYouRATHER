import { GET_QUESTIONS , SAVE_ANSWER_TO_QUESTION, ADD_QUESTION} from '../actions/questions'

export const questions =(state={} , action)=>{

    switch (action.type){
        case GET_QUESTIONS:
            return { ...action.questions}
        case SAVE_ANSWER_TO_QUESTION:
          const  { authedUser, qid, answer }= action
          return {
              ...state,[qid]: {...state[qid],[answer]:{ ...state[qid][answer],votes:[...state[qid][answer].votes,  authedUser]}}
          }
        case ADD_QUESTION:
          return {
              ...state, [action.question.id]: action.question
          }
    }
    return state
}