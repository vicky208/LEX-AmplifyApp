let allMessages = [{id:0,type:1,content:"Hello, what can I help you?"}]

export const addMessage = (m) => {
    allMessages.push(m)
}
export const getMessage = () => {
   return allMessages
}

export {allMessages}
