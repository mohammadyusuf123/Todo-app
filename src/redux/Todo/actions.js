import{LOADED ,ADDED,ALLCOMPLETE,COLORSELECTED,CLEARCOMPLETED,DELETED,TOGGLED} from'../Todo/ActionsTypes'


export const loaded=(todos)=>{
    return{
         type:LOADED,
         payload:todos
    }
}
export const added=(todoText)=>{
    return{
         type:ADDED,
         payload:todoText
    }
}
export const toggled=(todoId)=>{
    return{
         type:TOGGLED,
         payload:todoId
    }
}
export const colorSelected=(todoId,color)=>{
    return{
         type:COLORSELECTED,
         payload:{
            todoId,
            color
         }
    }
}
export const allCompleted=()=>{
    return{
         type:ALLCOMPLETE
        
    }
}
export const deleted=(todoId)=>{
    return{
         type:DELETED,
         payload:todoId
    }
}
export const clearCompleted=()=>{
    return{
         type:CLEARCOMPLETED
       
    }
}