import { SettingModal, PageLoadingModal, PageRefreshingModal, PageLoadMoreModal, actionModal } from "../modal";
import Utils from "../utils";

/**
 * manage app configuration data
 * @param state initial state for setting reducer
 * @param action  is a plain object which contain type object
 */
export const settingReducer = (state: SettingModal= new SettingModal(), action: any) => {
    switch (action.type) {
        case Utils.actionName.NETWORK_STATUS:
            return { ...state, hasNetworkConnect: action.payload.hasNetworkConnect };
        default:
            return state
    }
}

export const globalLoadingReducer = (state: PageLoadingModal= new PageLoadingModal(), action: actionModal = new actionModal()) => {
    //@ts-ignore
    const { payload } = action;
    switch (action.type) {
        case Utils.actionName.LOADING:
            return Object.assign({}, state, {
                // sets the loading boolean at this scope
                //@ts-ignore
                [`${payload.scope}Loading`]: payload.isLoading
            });
        default:
            return state
    }
}


/**
 * 
 * @param state : current state of refresh state
 * @param action: action type
 */
export const globalRefreshReducer = (state: PageRefreshingModal = new PageRefreshingModal(), action: actionModal = new actionModal()) => {
    //@ts-ignore
    const { payload } = action;
    switch (action.type) {
        case Utils.actionName.REFRESHING:
            return Object.assign({}, state, {
                // sets the loading boolean at this scope
                //@ts-ignore
                [`${payload.scope}Refresh`]: payload.isRefreshing
            });
        default:
            return state
    }
}


/**
 * define intial state of refreshing
 */
const IS_LOADMORE = {
    
}


/**
 * 
 * @param state : current state of refresh state
 * @param action: action type
 */
export const globalLoadMoreReducer = (state: PageLoadMoreModal = new PageLoadMoreModal(), action: any) => {
    //@ts-ignore
    const { payload } = action;
    switch (action.type) {
        case Utils.actionName.LOAD_MORE:
            return Object.assign({}, state, {
                // sets the loading boolean at this scope
                //@ts-ignore
                [`${payload.scope}LoadMore`]: payload.isLoadMore
            });
        default:
            return state
    }
}
