/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUri: String;
  status: String;
};

export type Message = {
  id: String;
  content: String;
  createdAt: String;
  user: User;
};

export type ChatRoom = {
  id: String;
  users : User[];
  lastMessage: Message;
  chatRoomUser: String;
  chatRoomUsers: String;
};
export type Users = {
  id: String;
  user : User[];
};
export type ChatRoomUser = {
  id: String;
  userID: String;
  chatRoomID: String;
};
// export type ChatRoom = {
//   id: String;
//   chatRoomUser: String;
// };
