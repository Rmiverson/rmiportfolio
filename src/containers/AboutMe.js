import React from "react";
import Nav from "../components/Nav";
import SocialBar from "../components/SocialBar";
import Splash from "../components/Splash";

const tempData = {
   "range": null,
   "majorDimension": "ROWS",
   "values": [
      ["About Me", "Contact", "Design", "Development", "Photography"],
      ["Test data for about me", "", "", "", ""],
      ["More test data"],
      ["another test paragraph"]
   ]
}

const AboutMe = () => {
   return (
      <div className="about-me">
         <div className="landing">
            <Splash />
         </div>

         <Nav />
         
         <div className="main-body">
            <h2>About Me</h2>
            {tempData?.values?.map((value, index) => {
               if (index > 0) {
                  if (index === 1) {
                     return (
                        <div className="about-introduction" key={value[0]}>
                           <img alt="Riley Iverson" src="../media/ProfilePicture192.jpg" />
                           <p>{value[0]}</p>
                        </div>
                     )
                  }
                  return (
                     <p key={value[0]}>{value[0]}</p>
                  )
               } else {
                  return null
               }
            })}

            <SocialBar />

            <div className="download">
               <h3>Download My Resume</h3>
               <a href="https://drive.google.com/uc?export=download&id=1qniM-msoSLwbS8h6bAe0q6RUV9LkvPWmuEm3imEjpIc">Download</a>
            </div>
         </div>
      </div>
   );
};

export default AboutMe;