import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
export const Todo = styled.div`
  border: 3px solid rgb(67, 134, 125);
  min-width: 25%;
  min-height: 200px;
  padding: 0 24px;
  border-radius: 3px;
  padding-top: 10px;
`;

export const Button = styled.button`
  width: 120px;
  padding: 10px;
  margin: 5px 0px 0px 20px;
  border: 2px solid white;
  border-radius: 10px;
`;
export const DeleteButton = styled.button`
  cursor: pointer;
  margin: 0px 10px 0px 10px;
  width: 40%;
  background-color: #da2638;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 30px;
  :hover {
    scale: 1.1;
  }
`;
export const CancelButton = styled.button`
  cursor: pointer;
  margin: 0px 10px 0px 10px;
  width: 40%;
  background-color: #5c636a;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 30px;
  :hover {
    scale: 1.1;
  }
`;
export const CompleteButton = styled.button`
  cursor: pointer;
  margin: 0px 10px 0px 10px;
  width: 40%;
  background-color: #2b7cf7;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 30px;
  :hover {
    scale: 1.1;
  }
`;
