import {COLOURCHANGED,STATUSCHANGED} from'./actionsTypes'

 export const colorChanged=(color,changeType)=>{
    return{
        type:COLOURCHANGED,
        payload:{
         color,
         changeType
        }
    }
}
 export const statusChanged=(status)=>{
    return{
        type:STATUSCHANGED,
        payload:status
    }
}