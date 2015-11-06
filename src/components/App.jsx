import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './Messagebox.jsx';
import Login from './Login.jsx';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

@connectToStores
class App extends React.Component {
    constructor(){
        super();

        ThemeManager.setPalette({
            primary1Color: Colors.cyan500,
            primary2Color: Colors.cyan700,
            primary3Color: Colors.lightBlack,
            accent1Color: Colors.pinkA200
        });
    }

    static getStores(){
        return [ChatStore];
    }

    static getPropsFromStores(){
        return ChatStore.getState();
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext(){
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        }
    }

    render(){
        var view = <Login />;

        if(this.props.user){
            view = (
                <div>
                    <div style={{
                            display: 'flex',
                            flexFlow: 'row wrap',
                            maxWidth: 1200,
                            widge: "100%",
                            margin: 30
                        }}>
                        <ChannelList />
                        <MessageList />
                    </div>
                    <MessageBox />
                </div>
            );
        }

        return (
            <div>
                <AppBar title="Awesome Chat App" />
                {{view}}
            </div>
        );
    }
}

export default App;
