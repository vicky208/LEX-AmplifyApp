import logo from './logo.svg';
import './App.css';
import ChatPage from './page/ChatPage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
