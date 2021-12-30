import * as React from 'react';
import { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ContactListItem from '../components/ContactListItem';
import NewMessageButton from '../components/NewMessageButton';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import chatRooms from '../constants/Data/ChatRooms';
// import users from '../constants/Data/Users';


import {
  Auth,
  API,
  graphqlOperation,
} from 'aws-amplify';
import { listUsers } from '../src/graphql/queries';
import { useState } from 'react';

export default function Contacts() {

  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try{
        const userData = await API.graphql(
          graphqlOperation(
            listUsers
        ))
        setUsers(userData.data.listUsers.items)
        // console.log(userData.data.listUsers.items)
      } catch (e) {
        console.log(e)
      }
    }
    fetchUsers();
  }, [])



  return (
    <View style={styles.container}>
      {/* <ChatListItem chatRoom = {chatRooms[0]} /> */}
      <FlatList
      style = {{width: '100%'}} 
      data = {users}
      renderItem = {({item}) => <ContactListItem user = {item} />}
      keyExtractor = {(item) => item.id}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
