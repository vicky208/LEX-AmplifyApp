import React, { useEffect, useState } from "react";
import Message from './Message';
import '../App.css';
import {getMessage,addMessage} from "../variables";

const Messages = () => {
    const [messages, setMessages] = useState([]);

    const [text, setText] = useState("");

    useEffect(() => {
        setMessages(getMessage());
      });

    const handleSend = async () => {
        if(text !== ""){
            var messagelist = getMessage();
            var len = messagelist.length;
            var message1 = {id:len,type:0,content:text};
            addMessage(message1);
            const msgs = [...messages];
            setMessages(msgs);
            setText("");
        }
    }
    
    return (
        <div>
            <div className="messages">
                {messages.map((m) => (
                    <Message message={m} key={m.id}/>
                ))}
            </div>
            <div className="InputBox">
                <span>
                <input className="input"  maxlength={200} type="text" placeholder="Type..."  onChange={(e) => setText(e.target.value)}
                value={text}/>
                <button onClick={handleSend}className="send">Send</button>
                </span>
            </div>
        </div>
    );
  };
  
  export default Messages;
