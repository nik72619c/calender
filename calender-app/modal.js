import React from 'react';
import {Text, View,TextInput} from 'react-native';
import {Overlay} from 'react-native-elements';
export default class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date:"06-06-2019"
        }

    }
    render(){
        return (<Overlay
            isVisible={this.props.isVisible}
            onBackdropPress={this.props.closeModal}
                >
                <TextInput
                    style={{
                        borderRightWidth: 1,
                        borderLeftWidth: 1,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        height: 50,
                        borderColor: "black",
                    }}
                    placeholder="Type something !"
                />

        </Overlay>
        )
    }
}
