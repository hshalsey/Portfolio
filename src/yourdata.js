
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"


import githubIcon from "./images/github.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  
  name: "Haley Halsey",
  headerTagline: [
    
    "Full Stack Web Developer",
    
    " ",
    
    " ",
  ],
  
  headerParagraph:
    "Currently enrolled in a coding bootcamp hosted at the University of Oregon ",

  contactEmail: "haleyhalsey@yahoo.com",

  projects: [
    {
      title: "Music Spider", 
      para:
        "A simple app to search lyrics and find a song. It also offers similar artists based on what you searched", // Add Your Service Type Here
      
      imageSrc:
        "./images/musicspider.png",
      
      url: "https://inesr19.github.io/Project-1/",
    },
    {
      title: "Fitness Tracker", 
      para:
        "An app to help keep track of what workouts you do and how often.", 
      
      imageSrc:
        "./images/fitnesstracker.png",
      
      url: "https://halseyworkout.herokuapp.com/",
    },
    {
      title: "Grocery List", 
      para:
        "An app to keep track og the items in your fridge and what you need to buy at the store.", // Add Your Service Type Here
      
      imageSrc:
        "./images/grocerylist.png",
      
      url: "https://the-grocery-list.herokuapp.com/",
    },
    {
      title: "Password Generator", 
      para:
        "An app tp generate a random password", 
      imageSrc:
        "./images/passwordgenerator.png",

      url: "https://hshalsey.github.io/PassGenerator/",
    },
  

  
  ],

  
  aboutParaOne:
    "My name is Haley Halsey and I live in Prineville Oregon. I am enrolled in University of Oregon's coding bootcamp and I am scheduled to graduate in April of 2021.",
  aboutParaTwo:
    "As of now I work in Logistics and Bookkeeping however I plan to start looking for a development job shortly after I graduate. ",
  aboutParaThree:
    "I have really enjoyed all that I have learned so far and really look forward to honing in on all of my skills. I also really look forward to learning new languages and starting to code along side professionals.",




  skills: [
    {
      img: htmlIcon,
    },
    {
      img: cssIcon,
    },
    {
      img: jsIcon,
    },
    {
      img: reactIcon,
      
    },
  ],

  

  contactSubHeading: "Let's create your next experience together",
  social: [
   
    { img: githubIcon, url: "https://github.com/hshalsey" },
  
  ],

  
}

