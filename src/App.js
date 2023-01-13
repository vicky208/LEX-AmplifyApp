import logo from './logo.svg';
import './App.css';
import ChatPage from './page/ChatPage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Amplify, Interactions } from 'aws-amplify';
import awsconfig from './exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ChatPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
