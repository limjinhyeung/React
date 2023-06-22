/* Header.js */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">홈</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/BoardList">게시판</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      {/* <Link to="/Login">로그인</Link> */}
      <hr />
    </header>
  );
};

export default Header;
