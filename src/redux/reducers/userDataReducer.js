import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Define your initial state here
    friendsLastChat: [],
    contacts:[],
    friendsChat:[]
};

// Create userData silce here
const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    // all action define here
    updateContacts(state , action) {
      state.contacts = action.payload
    },
    fetchFriendsLastChat(state, action) {
      state.friendsLastChat = action.payload
    },
    updateFriendsLastChat(state, action) {
        const recentChatList=state.friendsLastChat.filter(
            (contact)=> contact.id !== action.payload.userId
        );
        recentChatList.unshift(action.payload.contactObject);
        localStorage.setItem('friendsLastChat', JSON.stringify(recentChatList));
        state.friendsLastChat=recentChatList;
    },
    fetchFriendsChat(state, action) {
      state.friendsChat = action.payload
    },
    addNewMessage(state, action) {
        const updatedFriendsChat = state.friendsChat;
        const contacts=state.contacts;
        if(action.payload.msg.message_id > 1){
          const user = state.friendsChat.find(
          (contact) => contact.id === action.payload.userId
          );
          user.chatlog.unshift(action.payload.msg);
        }
        else{
          const contact=contacts.find((contact)=>contact.id=== action.payload.userId);
          const chatObject={
            id:contact.id,
            name:contact.name,
            picture:contact.picture,
            chatlog:[action.payload.msg]
          }
          updatedFriendsChat.unshift(chatObject);
        }
        localStorage.setItem('friendsChat', JSON.stringify(updatedFriendsChat));
        state.friendsChat=updatedFriendsChat;
    },
    // Additional reducers can be defined here
},
});

// All userDataSlice Actions named export here
export const { fetchFriendsChat, updateFriendsLastChat, fetchFriendsLastChat, updateContacts , addNewMessage} = userDataSlice.actions;

// userData Reducer named export here
export const userDataReducer= userDataSlice.reducer;

// userDataSelector export here 
export const userDataSelector = (state) => {
  return state.userData
};
