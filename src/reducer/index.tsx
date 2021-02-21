import { combineReducers } from "redux";
import Utils from "../utils";
import { settingReducer, globalLoadingReducer } from "./mainReducer";
const appReducer = combineReducers({
    settingReducer,
    globalLoadingReducer
});

const rootReducer = (state: any, action: any) => {
    if (action.type === Utils.actionName.USER_LOGOUT) {
        const { settingReducer  } = state;
        state = { settingReducer };
    }
    return appReducer(state, action)
}
export default rootReducer;
