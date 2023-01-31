
import { toggled } from "../actions"

export const updatedTodo= (todoId,currentStatus)=>{
  
    return async (dispatch)=>{
        const response=await fetch(`http://localhost:4000/todos/${todoId}`,{
            method:"PATCH",
            body:JSON.stringify({
                completed:!currentStatus
            }),
            headers:{
                'content-type':'application/json; charest=UTF-8'
            }
        })
        const todo= await response.json()
        dispatch(toggled(todo.id))
    }

}

