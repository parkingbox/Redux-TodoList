import React from "react";
import styled from "styled-components";
import AddTodos from "../../components/addTodos/AddTodos";
import Header from "../../components/header/Header";
import TodoList from "../../components/todoList/TodoList";

const TodosWrapper = styled.div`
  height: 100vh;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

function Main() {
  return (
    <>
      <TodosWrapper>
        <Header />
        <AddTodos />
        <TodoList />
      </TodosWrapper>
    </>
  );
}

export default Main;
