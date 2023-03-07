import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Detail, Wrapper } from "./TodoDetail.styled";

function TodoDetail() {
  const { todos } = useSelector((state) => state.todos);
  const params = useParams();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Detail>
        {todos
          .filter((todo) => todo.id === parseInt(params.id))
          .map((todo) => (
            <div key={todo.id}>
              <p>ID: {todo.id}</p>
              <h2>{todo.title}</h2>
              <p>{todo.content}</p>
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                이전으로
              </Button>
            </div>
          ))}
      </Detail>
    </Wrapper>
  );
}

export default TodoDetail;
