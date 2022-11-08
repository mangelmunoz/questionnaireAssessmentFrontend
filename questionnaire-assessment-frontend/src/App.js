import {React, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import QuestionPage from "./pages/questionPage";
import TestEndPage from "./pages/testEndPage";
import './styles/App.css';

function App() {

  const [email,setEmail] = useState("");

  return (

    <div>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login setEmail={setEmail}/>} />
          <Route path="/question" element={<QuestionPage email={email}/>} />
          <Route path="/testend" element={<TestEndPage />} />

        </Routes>

      </BrowserRouter>

    </div>

  );

}

export default App;
