import React from "react";
import styled from "styled-components";

const Headers = styled.div`
  border: solid 1px lightgrey;
  border-radius: 5px;
  padding: 20px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <Headers>
      <h2>My Todo List</h2>
      <h3>React</h3>
    </Headers>
  );
}

export default Header;
