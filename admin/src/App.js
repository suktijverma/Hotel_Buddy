import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/newHotel/NewHotel";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
// import NewHotel from "./pages/newHotel/NewHotel";
// import NewRoom from "./pages/newRoom/NewRoom";
import React, { Component }  from 'react';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login/>}/>
            <Route index element={<ProtectedRoute>
            <Home/>
            </ProtectedRoute>
            }/>
            
            <Route path="users">
              <Route index element={<ProtectedRoute>
            <List columns={userColumns}/>
            </ProtectedRoute>}/>
              <Route path=":userId" element={<ProtectedRoute>
            <Single/>
            </ProtectedRoute>}/>
              <Route
              path="new"
              element={<New inputs={ userInputs} title="Add new User"/>}
              />
          </Route>
          <Route path="hotels">
          <Route index element={<List columns={hotelColumns}/>}/>
          <Route path=":prouctId" element={<ProtectedRoute>
            <Single/>
            </ProtectedRoute>}/>
          <Route
            path="new"
            element={<New inputs={ productInputs} title="Add new Product"/>}           
            />
            </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;