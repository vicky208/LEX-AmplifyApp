import React from 'react'
import '../App.css';


const Message = ({ message }) => {
  
    /*useEffect(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);*/

    /*if(message.type === 0){
        return (
            <div className="userMessage">
                <div className="messageInfo">
                    <img src="./account.png"/>
                </div>
                <div className="userContent">
                    <p className="p2">{message.text}</p>
                </div>
            </div>
        );
    }*/
  
    return (
        <div className="message">
            <div className="messageInfo">
                <img src="./chatbot.png" height="50px"/>
            </div>
            <div className="messageContent">
                <p className="p1">Hello, What Can I Help You?</p>
            </div>
        </div>
    );
  };
  
  export default Message;