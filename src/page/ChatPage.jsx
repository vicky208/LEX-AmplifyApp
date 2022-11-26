import React from 'react'
import '../App.css';
import Messages from '../component/Messages';

const ChatPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./ubcLogo.png" height="80px"/>
        <span className='App-name'>Student Assistant Bot</span>
      </header>

      <Messages />

      <div className="InputBox">
        <span>
          <input class="input" type="text" placeholder="Type..." onblur="temporaryRepair()"/>
          <img src="./mic.png" class="voice"></img>
          <button type="button" class="send">Send</button>
        </span>
      </div>
    </div>
  )
}

export default ChatPage