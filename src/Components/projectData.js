
import agFindParking from "../ProjectsSnaps/AirGarage/agFind_parking.png"
import agHome from "../ProjectsSnaps/AirGarage/agHome.png"

import taHome from "../ProjectsSnaps/TripAdvisor/taHome.png"
import taMoreExp from "../ProjectsSnaps/TripAdvisor/taMore_explore.png"

import jcCart from "../ProjectsSnaps/JCrew/jcCart.png"
import jcCheckout from "../ProjectsSnaps/JCrew/jcCheckout.png"
import jcHome from "../ProjectsSnaps/JCrew/jcHome.png"
import jcWomen from "../ProjectsSnaps/JCrew/jcProducts_women.png"
import jcSingle from "../ProjectsSnaps/JCrew/jcSingle_page.png"

import snHome from "../ProjectsSnaps/StyleNova/snHome.png"
import snFilters from "../ProjectsSnaps/StyleNova/snFilters.png"







const projectsData=[
    {
        title:"J.Crew",
        description:"J. Crew is an American company, that offers apparel and accessories for women, men, and children.",
        techStack:["ReactJs", "Redux","React-Redux","HTML","JavaScript",'CSS','Chakra UI'],
        deployedURL:"https://loquacious-lokum-74d071.netlify.app/",
        githubURL:"https://github.com/rohit0985/abiding-bell-8807/tree/main/my-app",
        images:[jcHome,jcWomen,jcSingle,jcCart, jcCheckout],
    },
    {
        title:"AirGarage",
        description:"AirGarage is an American company, provides the online booking of the parking space.",
        techStack:["HTML",'CSS',"JavaScript"],
        deployedURL:"https://air-garage-clone.netlify.app/",
        githubURL:"https://github.com/fahad9988/naughty-wind-121",
        images:[agHome,agFindParking],
    },
    {
        title:"TripAdvisor",
        description: "TripAdvisor is an American company that offers online  hotel reservations and bookings for hotels and restaurants",
        techStack:["React", "HTML",'CSS',"JavaScript"],
        deployedURL:"https://glowing-trifle-8a35b0.netlify.app/",
        githubURL:"https://github.com/rohit0985/TripAdvisor-clone/tree/main/tripadvisor",
        images:[taHome,taMoreExp],
    },
    {
        title:"StyleNova",
        description: "It is an eCommerce website that deals with the clothing and accessories for Men, Women, Kids etc.",
        techStack:["React","React-redux","NodeJs", "MongoDB","Mongoose", "HTML",'CSS',"JavaScript"],
        deployedURL:"https://stylenova.netlify.app/",
        githubURL:"https://github.com/msnimish/active-art-8329",
        images:[snHome,snFilters],
    }
]

export default projectsData;