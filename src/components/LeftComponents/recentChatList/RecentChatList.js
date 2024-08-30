import React from "react";
import RecentChat from "./RecentChat";

/**
 * Component to display a list of recent chats.
 * @param {Object[]} lastChat - Array of recent chats with friends.
 * @returns {JSX.Element} - JSX element representing the RecentChatList component.
 */
function RecentChatList({ lastChat }) {
  return (
    <div className={"chat-list-container"}>
      {/* Unordered list to display recent chats */}
      <ul>
        {/* Mapping through the lastChat array to render RecentChat component for each friend */}
        {lastChat &&
          lastChat.map((friend) => (
            <RecentChat key={friend.id} friend={friend} />
          ))}
      </ul>
    </div>
  );
}

export default RecentChatList;
