import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { HandleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {

    
    state={
        optionOne:'',
        optionTwo:''
    }

    HandleOptionOne=(value)=>{
        this.setState((oldstate)=>({
            ...oldstate,optionOne:value
        }))
    }

    HandleOptionTwo=(value)=>{
        this.setState((oldstate)=>({
            ...oldstate,optionTwo:value
        }))
    }

    HandleSubmit=(e)=>{
        e.preventDefault()
        const {optionOne, optionTwo} = this.state
        console.log(optionOne, optionTwo)
        this.props.dispatch(HandleAddQuestion({optionOne, optionTwo})).
        then(()=>(
            this.props.history.push('/')
        )).
        catch((e)=>(alert(`error ${e} occured`)))
    }
    render() {
        
      return (
          <div className='center border rounded'>
           <div style={{textAlign:'center '}} className='m-3' >
                <h1 className='text-info'>Create New Question</h1>
           </div>
           <p className='m-3'>Complete the Question:</p>
           <h5 className='m-3'>Would you rather...</h5>
           <div className='m-3'>
           <form onSubmit={this.HandleSubmit}>
           <input className='border rounded w-100' type='text' name='optionOne' placeholder='Enter Option one' value={this.state.optionOne} onChange={(event)=>(this.HandleOptionOne(event.target.value))}/>
           <h6  className='m-3'>or</h6>
           <input className='border rounded w-100' type='text' name='optionTwo' placeholder='Enter Option Two' value={this.state.optionTwo} onChange={(event)=>(this.HandleOptionTwo(event.target.value))}/>
           <button className='mt-3 btn btn-primary w-100'type='submit' disabled={!(this.state.optionTwo&&this.state.optionTwo)} >Submit</button>
           </form>            
           </div>
           
          </div>
      )
    }
  }
  
  
  
  
  export default connect()(NewQuestion)