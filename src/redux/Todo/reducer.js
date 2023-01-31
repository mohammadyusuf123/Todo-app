import initialState from './initialState'
import{LOADED,ADDED,ALLCOMPLETE,COLORSELECTED,CLEARCOMPLETED,DELETED,TOGGLED} from'../Todo/ActionsTypes'



const nextTodoId=(todos)=>{
    console.log(todos)
const maxId=todos.reduce((maxId,todo)=>Math.max(todo.id,maxId),-1 )
return maxId+1
}


export const reducer=(state=initialState,actions)=>{

   switch (actions.type) {
    case LOADED:
        return actions.payload

    case ADDED:
        return[
            ...state,{
                id:nextTodoId(state),
                text:actions.payload,
                completed:false
            }
        ]
   
    case TOGGLED:
        return state.map(todo=>{
            if(todo.id!==actions.payload){
            return todo;
            }
            return{
                ...todo,
                completed: !todo.completed
            }
                
            
        })
    case COLORSELECTED:
        const{color,todoId}=actions.payload
        return state.map(todo=>{
            if(todo.id!==todoId){
            return todo
            }
            return{
                ...todo,
                color:color
                
            }
        })
        case DELETED:
        return state.filter(todo=>todo.id!==actions.payload)

        case ALLCOMPLETE:
        return state.map(todo=>{
           return{
            ...todo,
            completed:true
           
           }
        })
        case CLEARCOMPLETED:
        return state.filter(todo=>!todo.completed)
    default:
       return state
   }

}

export default reducer