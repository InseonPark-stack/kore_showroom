import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import "./Header.scss";

function Header() {
  const moveHomePage = () => {
    window.open("https://kore.ai/");
  };
  const moveNaverBlog = () => {
    window.open("https://blog.naver.com/koreai_korea");
  };
  const moveYoutubePage = () => {
    window.open("https://www.youtube.com/@user-mf4on2dt5f");
  };
  return (
    <div>
      <div className="logo-title">
        <span className="left-title"></span>
        <span className="center-title">
          <img
            src="img/kore_logo.png"
            width="330px"
            height="45px"
            alt="kore.ai Logo svg file"
          ></img>
        </span>
      </div>
      <div className="icon-role">
        <span className="right-title">
          <span>Blog</span>
          <img
            src="img/naver_blog_icon.png"
            width="30px"
            height="30px"
            alt="naver blog logo file"
            onClick={moveNaverBlog}
          ></img>{" "}
          {/* <img
      src="img/Kore.ai_favicon.svg"
      width="30px"
      height="30px"
      alt="youtube logo file"
      onClick={moveHomePage}
    ></img> */}
          <br></br>
          <span>Homepage</span>
          <AiOutlineHome onClick={moveHomePage} />
          <br></br>
          <span>Youtube</span>
          <img
            src="img/youtube.svg"
            width="30px"
            height="30px"
            alt="youtube logo file"
            onClick={moveYoutubePage}
          ></img>
        </span>
      </div>
    </div>
  );
}

export default Header;
