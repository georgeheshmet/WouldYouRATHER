import { GET_QUESTIONS , SAVE_ANSWER_TO_QUESTION, ADD_QUESTION} from '../actions/questions'

export const questions =(state={} , action)=>{

    switch (action.type){
        case GET_QUESTIONS:
            return { ...action.questions}
        case SAVE_ANSWER_TO_QUESTION:
          const  { authedUser, question_id, answer }= action
          return {
              ...state,[question_id]: {...state[question_id],[answer]:{ ...state[question_id][answer],votes:[...state[question_id][answer].votes,  authedUser]}}
          }
        case ADD_QUESTION:
          return {
              ...state, [action.question.id]: action.question
          }
        default: return state
    }
}