import { loaded } from "../actions"

export const todoMiddleware= async (dispatch)=>{
    const response=await fetch('http://localhost:4000/todos')
    const todos= await response.json()
    dispatch(loaded(todos))
}

