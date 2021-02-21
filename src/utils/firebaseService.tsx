import firebase from "firebase";
import Store from "../store";
import { initializeFirebase } from './firebaseConfig';
import moment from "moment";
class FirebaseService {
    private inboxRef: any = null;
    private usersRef: any = null;
    private messageRef: any = null;
    

    constructor() {
        initializeFirebase();
        this.inboxRef = firebase.database().ref('inbox');
        this.usersRef = firebase.database().ref('users');
        this.messageRef = firebase.database().ref('message');
    }
    /**
     * logged in firebase
     */
    connectUserByAuthorizingWith(email: string, password: string, callback: Function = () => { }) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                callback();
            })
            .catch((error) => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((user) => {
                        callback();
                    })
                    .catch((error) => {
                        callback();
                    });
            });
    }
    createUserNode(userInfo: any) {
        this.usersRef.child(userInfo.user_id).set({
            device_token: "",
            device_type: "3",
            email: userInfo.email,
            first_name: userInfo.first_name,
            image: userInfo.image,
            isOnline: true,
            last_name: userInfo.last_name,
            mobile: userInfo.first_name,
            user_id: userInfo.user_id
        });
    }
    getInbox(userId: string, callback: Function){
        this.inboxRef.child("prashatID").on('value',(data: any)=>{
            if(data.val() === null){
                callback([]);
            }else{
                callback(data.val());
            }
        })
    }
    createMessage(senderId: string, recieverId: string, message: string){
        let messageId = this.messageRef.push().getKey();
        this.messageRef.push({message:{
            senderId: senderId,
            recieverId: recieverId,
            message: message,
            timeStamp: firebase.database.ServerValue.TIMESTAMP
        }})
        
        this.inboxRef.child(senderId).push({
            senderId: senderId,
            recieverId: recieverId,
            message: message,
            timeStamp: firebase.database.ServerValue.TIMESTAMP
        })

        this.inboxRef.child(recieverId).push({
            senderId: senderId,
            recieverId: recieverId,
            message: message,
            timeStamp: firebase.database.ServerValue.TIMESTAMP
        })
    }
    
    

}

export default new FirebaseService();