import Utils from "../../utils"

export function handleLogOut(){
    return(dispatch: Function, getState: Function)=>{
        dispatch({ type: Utils.actionName.USER_LOGOUT})
    }
}