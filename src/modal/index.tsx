class UserDataModal {
    name: string = "";
    experience: string = "";
    specialities: string = "";
    language: string = "";
    photo: string = "";
    description: string = "";
    Statement: string = "";
    statement: string = "";
    table: any;
    status: string = "";
    a_sid: string = "";
    rating: string = "";
    numberOfUser_rating: string = "";
    token: string = "";
}
class SettingModal {
    isConnected: boolean;
}
class PageLoadingModal {
    loginLoading: boolean = false;
    forgotLoading: boolean = false;
    resetLoading: boolean = false;
    otpLoading: boolean = false;
}

class PageRefreshingModal {

}

class PageLoadMoreModal {

}
class actionModal {
    type: string = "";
    payload: Object = {};
}
class InboxModal {
    attachment: string = "";
    chatEndBy: string = "";
    chatStartBy: string = "";
    chatStartTime: string = "";
    chatStatus: string = "";
    deleteTimeStamp: string = "";
    message: string = "";
    messageType: string = "";
    orderId: string = "";
    receiverId: string = "";
    senderId: string = "";
    timeStamp: string = "";
    userImage: string = "";
}
class InboxList {
    inbox: Array<InboxModal> = [];

}
export {
    UserDataModal,
    SettingModal,
    PageLoadingModal,
    PageRefreshingModal,
    PageLoadMoreModal,
    InboxModal,
    InboxList,
    actionModal
}