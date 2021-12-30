import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import {
  Auth,
} from 'aws-amplify';

export type ChatListItemProps = {
  chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const [ otherUser, setOtherUser] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    const getOtherUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      if (chatRoom.chatRoomUsers.items[0].user.id === userInfo.attributes.sub) {
        setOtherUser(chatRoom.chatRoomUsers.items[1].user);
      } else {
        setOtherUser(chatRoom.chatRoomUsers.items[0].user);
      }
    }
    getOtherUser();
  }, [])

  const onClick = () => {
    navigation.navigate('ChatRoom', {
      id: chatRoom.id,
      name: otherUser.name,
    })
  }

  if (!otherUser) {
    return null;
  }

  // var usersName = chatRoom.lastMessage.user.name

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: otherUser.imageUri }} style={styles.avatar}/>

          <View style={styles.midContainer}>
            <Text style={styles.userName}>{otherUser.name}</Text>
            <Text
              numberOfLines={2}
              style={styles.lastMessage}>
              {chatRoom.lastMessage
                ? (chatRoom.lastMessage.user.name == "Aalok" ? `Me: ${chatRoom.lastMessage.content}`: `${chatRoom.lastMessage.user.name}: ${chatRoom.lastMessage.content}`)
                : ""}
            </Text>
          </View>

        </View>

        <Text style={styles.time}>
          {chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
};

export default ChatListItem;




// import moment from 'moment';
// import React from 'react'
// import { View , Text, Image, TouchableWithoutFeedback } from 'react-native'
// import { ChatRoom } from '../../types';
// import styles from './style';
// import { useNavigation } from '@react-navigation/native';

// export type ChatListItemProps = {
//     chatRoom : ChatRoom
// }

// const ChatListItem = (props : ChatListItemProps) => {
//     const { chatRoom } = props;
//     const user = chatRoom.users[1];
//     const navigation = useNavigation();

//     const onClick = () => {
//         navigation.navigate('ChatRoom', {
//             id : chatRoom.id,
//             name: user.name,
//         })
//     }

//     // console.log(user.imageUri)
//     return (
//         <TouchableWithoutFeedback onPress = {onClick}>
//             <View style = {styles.container}>
//                 <View style = {styles.leftContainer}>
//                     <Image source = {{ uri : user.imageUri}} style = {styles.avatar} />
//                     <View style = {styles.midContainer}>
//                         <Text style = {styles.userName}>{user.name}</Text>
//                         <Text numberOfLines= {1} ellipsizeMode = {"tail"} style = {styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
//                     </View>
//                 </View>
//                 <Text style = {styles.time}>
//                     {moment(chatRoom.lastMessage.createdAt).format('L')}
//                     </Text>
//                 {/* <Text style ={styles.time}>Yesterday</Text> */}
//             </View>
//         </TouchableWithoutFeedback>
//     )
// }

// export default ChatListItem
