import React, {useEffect, useState} from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { BsGithub } from "react-icons/bs"

import './Development.scss'

const Development = () => {
  const [result, setResult] = useState({data: {}, status: null, message: null});

  useEffect(() => {
    async function getData() {
      try {
        await fetch('db.json', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then((response) => response.json())
        .then((data) => {
          setResult({data: data, status: 200, message: 'OK'})
        });
      } catch (error) {
        setResult({data: {}, status: error, message: error})
      };
      };

      getData();
  }, []);

  if (!result.status) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="development">
        <div className="mid-ribbon">
          <div className="inner-mid-ribbon"></div>
        </div>
        <Nav />

        <div className="development-content min-height">
          <div className="developement-introduction">
            <h2>Development</h2>    
            <p>{result.data.development.about}</p>
          </div>

          <div className="skill-list">
            <h3>Skills</h3>
            <div className="list-container">
              <ul>
                {result.data.development.skills.map((skill, index) => {
                  return(<li key={skill + index}>{skill}</li>)
                })}                
              </ul>
            </div>     
          </div>

          <div className="development-projects">
            {result.data.development.projects.map((project, index) => {
              return (
                <div className="project" key={project.name + index}>
                  <h2>{project.name}</h2>
                  <p>{project.about}</p>

                  <div className="sub-sections">
                    {project.subSections.map((subSection, index) => {
                      return (
                        <div className="sub-section">
                          <h3>{subSection.name}</h3>
                          <p>{subSection.about}</p>
                          <a href={subSection.link}><BsGithub /></a>
                        </div>
                      )
                    })}                  
                  </div>

                  <img alt="Project Example" src={`/media/${project.media}`}/>
                </div>
              )
            })}
          </div>
        </div>

        <Footer />
      </div>
    );
  };
};

export default Development;