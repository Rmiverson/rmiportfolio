import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

import './Development.scss'

const Development = () => {
  return (
    <div className="development">
      <div className="mid-ribbon">
        <div className="inner-mid-ribbon"></div>
      </div>
      <Nav />

      <div className="development-content min-height">
        <div className="developement-introduction">
          <h2>Development </h2>    
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>

        <div className="skill-list">
          <h3>Skills</h3>
          <div className="list-container">
            <ul>
              <li>Skill</li>
              <li>Skill</li>
              <li>Skill</li>
              <li>Skill</li>
              <li>Skill</li>
            </ul>
            <ul>
              <li>Skill</li>
              <li>Skill</li>
              <li>Skill</li>
              <li>Skill</li>
              <li>Skill</li>
            </ul>  
            <ul>
              <li>Skill</li>
              <li>Skill</li>
              <li>Skill</li>
              <li>Skill</li>
              <li>Skill</li>
            </ul>  
            <ul>
              <li>Skill</li>
              <li>Skill</li>
              <li>Skill</li>
              <li>Skill</li>
              <li>Skill</li>
            </ul>
          </div>     
        </div>

        <div className="development-projects">
          <div className="project">
            <h2>Project Name</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

            <div className="fe-be-sections">
              <div className="fe">
                <h3>Frontend</h3>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <a alt="Github" href="https://github.com/Rmiverson">Github</a>
              </div>

              <div className="be">
                <h3>Backend</h3>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <a alt="Github" href="https://github.com/Rmiverson">Github</a>
              </div>
            </div>
            <img alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Development;