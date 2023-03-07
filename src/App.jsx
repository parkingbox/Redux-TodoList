import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import AddTodos from "./components/addTodos/AddTodos";
import Header from "./components/header/Header";
import TodoDetail from "./pages/TodoDetail";
import TodoList from "./components/todoList/TodoList";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
