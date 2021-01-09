import { GET_QUESTIONS , SAVE_ANSWER_TO_QUESTION} from '../actions/questions'

export const questions =(state={} , action)=>{

    switch (action.type){
        case GET_QUESTIONS:
            return { ...action.questions}
        case SAVE_ANSWER_TO_QUESTION:
          const  { authedUser, qid, answer }= action
          console.log("here")
          console.log({ ...state[qid][answer],votes:[...state[qid][answer].votes,  authedUser]})
          return {
              ...state,[qid]: {...state[qid],[answer]:{ ...state[qid][answer],votes:[...state[qid][answer].votes,  authedUser]}}
          }
    }
    return state
}