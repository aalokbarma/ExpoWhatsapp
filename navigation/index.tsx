/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';
import Colors from '../constants/Colors';
import {Octicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5} from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';

import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { Image } from 'react-native';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      //  headerShown: false 
      headerStyle : {
        backgroundColor : Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
       }}>
      <Stack.Screen 
        name="Root" 
        component={MainTabNavigator}
        options = {{
          title : 'WhatsApp',
          headerRight : () => (
            <View style = {{display: 'flex', flexDirection : 'row', alignItems: 'center', justifyContent : 'space-between', width: 60, marginRight: 10}}>
              <Octicons name = "search" size = {22} color = {'white'} />
              <MaterialCommunityIcons name = "dots-vertical" size = {26} color = {'white'} />
            </View>
          )
        }}
         />
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen} 
        options={({ route }) => ({
          //  headerLeft: () => (
          //    <Image source = {route.params.imageUri} style ={{borderRadius: 50, height: 60, width: 60}} />
          //  ),
           title: route.params.name,
           headerRight: () => (
             <View  style = {{display: 'flex', flexDirection : 'row', alignItems: 'center', justifyContent : 'space-between', width: 90, marginRight: 10}}>
               <FontAwesome5 name = "video" size = {18} color = {"white"} />
               <MaterialIcons name = "call" size = {20} color = {"white"} />
               <MaterialCommunityIcons name = "dots-vertical" size = {22} color = {'white'} />
             </View>
           ),
          })} 
      />
      <Stack.Screen 
        name="Contacts" 
        component={ContactsScreen} 
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
