import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ListItem leftAvatar={<Avatar src="http://www.ecoledumagasin.com/session19/wp-content/uploads/2010/03/avatar3_pg.jpg" />}>
                {this.props.message}
            </ListItem>
        );
    }
}

export default Message;
