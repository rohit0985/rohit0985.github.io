import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="a-wrapper">
    
      <h1 className="a-title">About me</h1>
      <div className="a">
        <div className="a-left">
          <div className="a-card">
            <img
              className="a-img"
              src="https://avatars.githubusercontent.com/u/107898713?s=400&u=ba2d084a35060c202705869b77bdea6884d4aaa0&v=4"
              alt="user-img"
            />
          </div>
        </div>

        <div className="a-right">
          <p className="a-desc">
            Hi There!, I am <span>Rohit Kumar</span>, self-motivated, hardworking aspiring
            full-stack web developer with in-depth knowledge of frontend. I love
            to build websites/application that serves the world. and always want
            to enhance my knowledge & adpot new technologies that make impact on
            people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
