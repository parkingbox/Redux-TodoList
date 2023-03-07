import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  height: 100vh;
`;

const Detail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 250px;
  border: 3px solid rgb(67, 134, 125);
  border-radius: 10px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 80px;
  background-color: #5c636a;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 30px;
  :hover {
    scale: 1.1;
  }
`;

function TodoDetail() {
  const { todos } = useSelector((state) => state.todos);
  const params = useParams();
  console.log(params);
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
