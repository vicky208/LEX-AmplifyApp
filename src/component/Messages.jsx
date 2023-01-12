import React, { useEffect, useState } from "react";
import Message from './Message';
import '../App.css';
import {getMessage,addMessage} from "../variables";

import { Amplify,Interactions } from 'aws-amplify';
import { AWSLexV2Provider } from '@aws-amplify/interactions';

Amplify.addPluggable(new AWSLexV2Provider());

const interactionsConfig = {
    Auth: {
        identityPoolId: "ca-central-1:d9039ad6-f9d8-4f9a-8114-66e79188f63a",
        region: "ca-central-1"
    },
    Interactions: {
        bots: {
            // LexV2 Bot
            TestBot: {
                name: "TestBot",
                aliasId: "TSTALIASID",
                botId: "T5ALQLFKDU",
                localeId: "en_US",
                region: "ca-central-1",
                providerName: "AWSLexV2Provider",
            },
        }
    }
}

Amplify.configure(interactionsConfig);

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
            sendToLex(text);
        }
    }

    const sendToLex = async (text)=>{
        try{
            const response = await Interactions.send("TestBot", text);
            var messagelist = getMessage();
            var len = messagelist.length;
            var res = response.messages;
            var m = {id:len,type:1,content:res[0].content};
            addMessage(m);
            const msgs = [...messages];
            setMessages(msgs);
            console.log(res[0].content);
        }catch(err){
            console.log(err);
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
                <input className="input"  maxLength={200} type="text" placeholder="Type..."  onChange={(e) => setText(e.target.value)}
                value={text}/>
                <button onClick={handleSend}className="send">Send</button>
                </span>
            </div>
        </div>
    );
  };
  
  export default Messages;