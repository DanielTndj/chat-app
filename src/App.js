import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from './components/ChatFeed'

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName={process.env.REACT_APP_USERNAME}
      userSecret={process.env.REACT_APP_USERSECRET}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
