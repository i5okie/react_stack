import React from 'react';
import Message from './Message.jsx'
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

var {Card, List} = mui;

@connectToStores
class MessageList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages: {}
        };
    }

    static getStores(){
        return [ChatStore];
    }

    static getPropsFromStores(){
        return ChatStore.getState();
    }

    render(){
        let messagesNodes = null;

        if(this.props.messages) {
            var messageNodes = _.values(this.props.messages).map((message)=> {
                return (
                    <Message message={message.message} />
                );
            });
        }



        return (
            <Card style={{
                    flexGrow: 2,
                    marginLeft: 30
                }}>
                <List>
                    {messageNodes}
                </List>
            </Card>
        );
    }
}

export default MessageList;