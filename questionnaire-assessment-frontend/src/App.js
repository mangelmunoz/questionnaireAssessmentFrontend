import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Question from "./components/Question";
import './styles/App.css';

function App() {

  return (

    <div>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/question" element={<Question />} />

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
