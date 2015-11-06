import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;

let MessageSource = {
    getmessages: {
        remote(state){
            if(firebaseRef){
                firebaseRef.off();
            }

            firebaseRef =
                new Firebase('https://brilliant-heat-4846.firebaseio.com/messages/' +
                state.selectedChannel.key);

            return new Promise((resolve, reject) => {
                firebaseRef.once("value", (dataSnapshot)=> {
                    var messages = detaSnapshot.val();
                    resolve(messages);
                });
            });
        },
        success: Actions.messagesReceived,
        error: Actions.messagesFailed
    }
}

export default MessageSource;
