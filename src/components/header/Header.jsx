import React from "react";
import styled from "styled-components";

const Headers = styled.div`
  border: solid 1px lightgrey;
  border-radius: 5px;
  padding: 20px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://img.stibee.com/23876_1629340598.jpg");
  background-size: 100% 100%;
  h1{
    color: #fff;
  }
`;

function Header() {
  return (
    <Headers>
      <h1>화성갈끄니까~</h1>
    </Headers>
  );
}

export default Header;
