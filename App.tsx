import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { withAuthenticator } from 'aws-amplify-react-native'

import {
  Auth,
  API,
  graphqlOperation,
} from 'aws-amplify';

import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import { useEffect } from 'react';
Amplify.configure(config);

// Run this snippet only when the app first counted


const randomImages = [
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/7.png',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/8.png',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/9.png',
]


 function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)]
  }

  useEffect( () => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache : true})

      if (userInfo){
        const userData = await API.graphql(
          graphqlOperation(
            getUser,
            { id: userInfo.attributes.sub }
            ))

            if (userData.data.getUser) {
              console.log('User is already registered.')
              return
            }
            
            const newUser = {
              id: userInfo.attributes.sub,
              name: userInfo.username,
              imageUri: getRandomImage(),
              status: "Hey! there I am using WhatsApp",
            }

            console.log(newUser);

            await API.graphql(
              graphqlOperation(
                createUser,
                {
                  input: newUser
                }
              )
            )
    

      }
  
    }
    fetchUser()
  } , [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
// export default App;
