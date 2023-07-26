import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import CreateUser from "./pages/CreateUser";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/userlist" element={<UserList />}></Route>
          <Route path="/createuser" element={<CreateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
