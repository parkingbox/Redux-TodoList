import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../redux/modules/todos";
import { AddTodoWrapper, Button, Form, Input } from "./addTodos.styled";

function AddTodos() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  //  마지막index + 1
  const lastTodoIdx = todos[todos.length - 1];
  const id = lastTodoIdx.id + 1;

  const submit = (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      alert("입력");
    } else {
      dispatch(
        addTodo({
          id,
          title,
          content,
          done: false,
        })
      );
      setContent("");
      setTitle("");
    }
  };

  return (
    <AddTodoWrapper>
      <Form>
        제목:
        <Input
          type="text"
          // input 내의 value 가 undefined로 들어간듯 함?
          value={title || ""}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        내용:
        <Input
          type="text"
          value={content || ""}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </Form>
      <Button onClick={submit}>추가하기</Button>
    </AddTodoWrapper>
  );
}

export default AddTodos;
