// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
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
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: reactIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------


  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/chetanverma16" },
    {
      img: codepenIcon,
      url: "https://www.codepen.com/",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/chetanverma",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
