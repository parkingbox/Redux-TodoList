import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, completeTodo } from "../../redux/modules/todos";
import {
  Wrapper,
  DeleteButton,
  Todo,
  CompleteButton,
  CancelButton,
} from "./TodoList.styled";

function TodoList() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Working.. 🔥</h1>
      <Wrapper>
        {todos
          .filter((todo) => todo.done === false)
          .map((todo) => (
            <Todo key={todo.id}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link
                  to={`/${todo.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  상세보기
                </Link>
              </div>

              <h1>{todo.title}</h1>
              <h4>{todo.content}</h4>
              <DeleteButton
                onClick={() => {
                  dispatch(deleteTodo(todo.id));
                }}
              >
                삭제
              </DeleteButton>
              <CompleteButton
                onClick={() => {
                  dispatch(completeTodo(todo.id));
                }}
              >
                완료
              </CompleteButton>
            </Todo>
          ))}
      </Wrapper>
      <h1>Done..🎉</h1>
      <Wrapper>
        {todos
          .filter((todo) => todo.done === true)
          .map((todo) => (
            <Todo key={todo.id}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link
                  to={`/${todo.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  상세보기
                </Link>
              </div>
              <h1>{todo.title}</h1>
              <h4>{todo.content}</h4>
              <DeleteButton
                onClick={() => {
                  dispatch(deleteTodo(todo.id));
                }}
              >
                삭제
              </DeleteButton>
              <CancelButton
                onClick={() => {
                  dispatch(completeTodo(todo.id));
                }}
              >
                취소
              </CancelButton>
            </Todo>
          ))}
      </Wrapper>
    </>
  );
}

export default TodoList;
