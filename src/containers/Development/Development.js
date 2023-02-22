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
          <div className="development-introduction">
            <h1>Software Development</h1>
            {result.data.development.about.map((paragraph, index) => {
              return (
                <p key={paragraph + index}>{paragraph}</p>
              )
            })} 
          </div>

          <div className="skill-list">
            <div className="skills-container">
              <h3>Skills:</h3>
              <ul>
                {result.data.development.skills.skills.map((skill, index) => {
                  let returnValue = skill

                  if (index + 1 !== result.data.development.skills.skills.length) {
                    returnValue = `${skill},`
                  }

                  return (
                    <li key={skill + index}>{returnValue}</li>
                  )
                })}                
              </ul>
            </div>

            <div className="languages-container">
              <h3>Languages:</h3>
              <ul>
                {result.data.development.skills.languages.map((language, index) => {
                  let returnValue = language

                  if (index + 1 !== result.data.development.skills.languages.length) {
                    returnValue = `${language},`
                  }

                  return (
                    <li key={language + index}>{returnValue}</li>
                  )
                })}                
              </ul>
            </div>

            <div className="tools-container">
              <h3>Tools:</h3>
              <ul>
                {result.data.development.skills.tools.map((tool, index) => {
                  let returnValue = tool

                  if (index + 1 !== result.data.development.skills.tools.length) {
                    returnValue = `${tool},`
                  }

                  return (
                    <li key={tool + index}>{returnValue}</li>
                  )
                })}                
              </ul>
            </div>
          </div>

          <div className="education">
            <h2>Education</h2>
            {result.data.development.education.map((item, index) => {
              return (
                <div key={item.name + index} className="education-item">
                  <div className="education-item-header">
                    <h3>{item.name}</h3>
                    <p>{`${item.school} || ${item.year}`}</p>
                  </div>

                  <p>{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="development-projects">
            <h2>Projects</h2>
            {result.data.development.projects.map((project, index) => {
              return (
                <div className="project" key={project.name + index}>
                  <h3>{project.name}</h3>
                  <p>{project.about}</p>

                  <div className="sub-sections">
                    {project.subSections.map((subSection, index) => {
                      return (
                        <div key={subSection.name + index} className="sub-section">
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