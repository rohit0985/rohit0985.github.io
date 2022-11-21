import React from "react";
import "./Project.css";
import { VscGithub, VscGithubInverted } from "react-icons/vsc";
import { AiOutlineEye, AiFillEye } from "react-icons/ai";

const Project = ({ title, techStacks, images, desc, github, deployed }) => {
  return (
    <div className="pc">


      <div className="pc-left">
        <div className="pc-images">
          <a href="https://google.com" target="_blank">
            <img src={images} alt="#" />
          </a>
        </div>
      </div>
      <div className="pc-right">
        <h2 className="pc-title">{title}</h2>

        <p className="pc-desc">
          Forest Essentials is an Indian cosmetics, skincare and perfume
          company that specialises in Ayurvedic preparations for its products.
          We implement basic e-commarce all functionalites. buy prodcuts ,add
          to cart , payment getway,search funtionalites etc. we are 2nd rank
          holder amongst 100+ projects. Team of 6 Members.
        </p>

        <div className="techStack_used">
         {
          techStacks && techStacks.map((el, i)=>  <img src={el} alt="#" className="teckStack" key={i} /> )
         }
        </div>

        <div className="pc-social">
          <a href={github}>
            Github
            <VscGithub />
          </a>
          <a href={deployed}>
            Visite
            <VscGithub />
          </a>
        </div>

      </div>
    </div>

  );
};

export default Project;
