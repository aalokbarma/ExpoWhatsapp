import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import { Message } from '../../types';
import styles from '../ChatMessage/style';

export type ChatMessageProps = {
    message: Message;
    myId: string,
}
const ChatMessage = (props: ChatMessageProps) => {
    const { message, myId } = props;

    const isMyMessage = () => {
        return message.user.id === myId;
    } 

    var time = moment(message.createdAt).fromNow();
    return (
        <View style = {styles.container}>
            <View 
                style = {[styles.messageBox, {
                    backgroundColor: isMyMessage() ? '#dcfbc5' : 'white'                    
                },
                {
                    marginRight: isMyMessage() ? 0 : 50,
                },
                {
                    marginLeft: isMyMessage() ? 50 : 0,
                }
            ]}
            >
                {!isMyMessage() && 
                    <View style = {styles.nameTimeCont}>
                        <Text style = {[  
                            styles.userName, {
                                color: isMyMessage() ? 'blue' : `${Colors.light.tint}`
                            }
                        ]}>{ isMyMessage() ? '' : message.user.name}</Text>
                    </View>
                }
                <Text style = {[styles.message,{
                    color: isMyMessage() ? `${Colors.dark.tint}` : 'white',
                }]}>{message.content}</Text>
                <Text style = {[
                    styles.time, {
                        color: isMyMessage() ? 'gray' : 'gray'
                    },
                ]}>{time}</Text>
            </View>
        </View>
    )
}

export default ChatMessage
