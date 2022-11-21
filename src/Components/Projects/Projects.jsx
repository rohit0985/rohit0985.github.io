import React from 'react'
import './Projects.css'
import Project from '../Project/Project'

let techStacks_img = {
  HTML : "https://shilpa17-shingnapure-portfolio.vercel.app/static/media/html_img.397540dec969b31fd37c.png",
  CSS : "https://shilpa17-shingnapure-portfolio.vercel.app/static/media/css.5491a3b05b4addb59c15.png",
  JavaScript : "https://shilpa17-shingnapure-portfolio.vercel.app/static/media/js.5648ae0aeb0182cbd857.jpg",
  Nodejs : "https://shilpa17-shingnapure-portfolio.vercel.app/static/media/node.c52357c303ec3b476aa5.webp",
  Expressjs : "",
  MongoDB : "",
}

let frameWorkOrTool ={
  Reactjs: "https://shilpa17-shingnapure-portfolio.vercel.app/static/media/react-logo.596719578a6bc111649161b1288e0cbb.svg",
  Bootstrap: "",
  git: "",
}


const projectsList = [
  {
    title: 'DNA India',
    techStacks: [`${techStacks_img.HTML}`, `${techStacks_img.CSS}`, `${techStacks_img.JavaScript}`],
    images:"https://niranjan-kumar.netlify.app/static/media/booking.fd7e1d6e.png",
    desc: "Forest Essentials is an Indian cosmetics, skincare and perfume company that specialises in Ayurvedic preparations for its products. We implement basic e-commarce all functionalites. buy prodcuts ,add to cart , payment getway,search funtionalites etc. we are 2nd rank holder amongst 100+ projects. Team of 6 Members.",
    github:"#",
    deployed:"#"
  },
  {
    title: 'Air Garage',
    techStacks: [`${techStacks_img.HTML}`, `${techStacks_img.CSS}`, `${techStacks_img.JavaScript}`,`${techStacks_img.Nodejs}`],
    images:"https://niranjan-kumar.netlify.app/static/media/booking.fd7e1d6e.png",
    desc: "Forest Essentials is an Indian cosmetics, skincare and perfume company that specialises in Ayurvedic preparations for its products. We implement basic e-commarce all functionalites. buy prodcuts ,add to cart , payment getway,search funtionalites etc. we are 2nd rank holder amongst 100+ projects. Team of 6 Members.",
    github:"#",
    deployed:"#"
  },
  {
    title: 'TripAdvisor',
    techStacks: [`${techStacks_img.HTML}`, `${techStacks_img.CSS}`, `${techStacks_img.JavaScript}`,`${techStacks_img.Nodejs}`,`${frameWorkOrTool.Reactjs}`],
    images:"https://niranjan-kumar.netlify.app/static/media/booking.fd7e1d6e.png",
    desc: "Forest Essentials is an Indian cosmetics, skincare and perfume company that specialises in Ayurvedic preparations for its products. We implement basic e-commarce all functionalites. buy prodcuts ,add to cart , payment getway,search funtionalites etc. we are 2nd rank holder amongst 100+ projects. Team of 6 Members.",
    github:"#",
    deployed:"#"
  },
]


const Projects = () => {
  return (
    <div className='p'>
        <h1 className='p-heading'>Projects</h1>
      <div className="p-texts">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, numquam. Consequatur reiciendis ipsum iusto impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, corporis.</p>
      </div>
      <div className='p-list'>
{
  projectsList.map((el ,i)=> <Project key={i} {...el}/>)
}
      </div>
    </div>
  )
}

export default Projects
