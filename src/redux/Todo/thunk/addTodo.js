import { added } from "../actions"

export const addTodo= (TodoText)=>{
  
    return async (dispatch)=>{
        const response=await fetch('http://localhost:4000/todos',{
            method:"POST",
            body:JSON.stringify({
                text:TodoText,
                completed:false
            }),
            headers:{
                'content-type':'application/json; charest=UTF-8'
            }
        })
        const todo= await response.json()
        dispatch(added(todo.text))
    }

}