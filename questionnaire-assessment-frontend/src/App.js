import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import QuestionPage from "./pages/questionPage";
import './styles/App.css';

function App() {

  return (

    <div>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/question" element={<QuestionPage />} />

          {/* <Route path="/home" element={<Home />} />

          <Route path="/userData/:id" element={<UserData />} />

          <Route path="*" element={<NoPage />} />

          <Route path="/payment" element={<PaymentData />} /> */}

          {/* </Route> */}

        </Routes>

      </BrowserRouter>

    </div>

  );

}

export default App;
