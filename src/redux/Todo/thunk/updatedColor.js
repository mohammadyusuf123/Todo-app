
import { colorSelected } from "../actions"

export const updatedColor= (todoId,color)=>{
  
    return async (dispatch)=>{
        const response=await fetch(`http://localhost:4000/todos/${todoId}`,{
            method:"PATCH",
            body:JSON.stringify({
                color:color,
            }),
            headers:{
                'content-type':'application/json; charest=UTF-8'
            }
        })
        const todo= await response.json()
        dispatch(colorSelected(todo.id,todo.color))
    }

}