import React from 'react'
import '../App.css';
import Messages from '../component/Messages';

const ChatPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <span>
            <img src="./ubcLogo.png" height="80px"/>
            <span className='App-name'>Student Assistant Bot</span>
            <button className="fB">Provide Feedback</button>
        </span>
      </header>

      <Messages />
    </div>
  )
}

export default ChatPage