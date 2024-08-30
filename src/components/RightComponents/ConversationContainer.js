// Importing necessary styles and components
import '../../styles/conversation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RightNavbar from "./RightNavbar";
import MessageBox from './MessageBoxComponents';
import MessageInputBox from './MessageInput';
import { useDispatch, useSelector } from 'react-redux'; // Importing Redux hooks for state management
import { useParams } from 'react-router-dom'; // Importing hook to access URL parameters
import { addNewMessage, updateFriendsLastChat } from '../../redux/reducers/userDataReducer'; // Importing action creators
import { useEffect } from 'react'; // Importing React hook for side effects
import { toast } from 'react-toastify'; // Importing library for notifications
import { userDataSelector } from "../../redux/reducers/userDataReducer";

/**
 * Component for rendering the conversation container.
 * Displays the right navbar, message box, and message input box.
 * Handles adding new messages and updating friends' last chat.
 * @returns {JSX.Element} - JSX element representing the ConversationContainer component.
 */
function ConversationContainer() {

  const dispatch = useDispatch(); // Redux dispatch hook
  const {friendsChat} = useSelector(userDataSelector); // Selecting friends chat data from Redux state
  const {contacts} = useSelector(userDataSelector); // Selecting contacts data from Redux state
  const { id } = useParams(); // Extracting user ID from URL parameters
  const userId = Number(id); // Converting user ID to a number
  let contactName, contactPicture, msgId; // Declaring variables for contact information

  // Filtering the chat for the selected user
  const filterContact = friendsChat.filter(chat => chat.id === userId);

  // If chat exists for the selected user
  if (filterContact.length > 0) {
    const { chatlog } = filterContact[0];
    msgId = chatlog.length;
    contactName = filterContact[0].name;
    contactPicture = filterContact[0].picture;
  } else { // If chat does not exist, get contact details
    const contact = contacts.filter(contact => contact.id === userId);
    msgId = 0;
    contactName = contact[0].name;
    contactPicture = contact[0].picture;
  }

  // Function to create a new message and update recent chat
  const createNewMessage = (message, timeStamp) => {
    const msgObject = {
      text: message,
      timestamp: timeStamp,
      sender: "right",
      message_id: msgId + 1
    };
    const recentUpdateObject = {
      id: userId,
      name: contactName,
      picture: contactPicture,
      latest_timestamp: timeStamp,
      lastChat: message
    };
    // Dispatch actions to add new message and update friends' last chat
    dispatch(addNewMessage({msg:msgObject, userId}));
    dispatch(updateFriendsLastChat({contactObject:recentUpdateObject, userId}));
    notify("Message sent successfully");
  };

  // Function to display notification
  const notify = (msg) => 
    toast.success(`🦄 ${msg}`, {
    // className:'notify-connected',
    autoClose: 1000,
    });

  // Effect hook to display a notification when connected with a contact
  useEffect(()=>{
    notify(`You are connected with ${contactName}`);
  },[contactName])

  // Returning JSX elements
  return (
    <>
      {/* RightNavbar component to display contact information */}
      <RightNavbar name={contactName} image={contactPicture} />
      {/* Display message box if chat exists */}
      {filterContact.length > 0 && <MessageBox contact={filterContact} />}
      {/* MessageInputBox component for entering new messages */}
      <MessageInputBox createNewMessage={createNewMessage} />
    </>
  );
}

export default ConversationContainer;
