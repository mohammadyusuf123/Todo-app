import initialState from'./initialState'
import {COLOURCHANGED,STATUSCHANGED} from'./actionsTypes'

const reducer=(state=initialState,actions)=>{
     
    switch (actions.type) {
        case STATUSCHANGED:
            return{
                ...state,
                status:actions.payload
            }
        case COLOURCHANGED:
            const{ color,changeType}=actions.payload
            switch (changeType) {
                case "added":
                    return{
                        ...state,
                        colors:[
                            ...state.colors,
                            color
                        ]
                    }
                    case "removed":
                        return{
                            ...state,
                            colors:state.colors.filter(exitingColor=>exitingColor !==color)
                        }
            
                default:
                   return state
            }
            
    
        default:
            return state
    }
}

export default reducer