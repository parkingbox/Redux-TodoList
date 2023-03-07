import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  height: 100vh;
`;

export const Detail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 250px;
  border: 3px solid rgb(67, 134, 125);
  border-radius: 10px;
`;

export const Button = styled.div`
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