import React, {useEffect, useState} from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

import './Design.scss'

const Design = () => {
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
      <div className="design">
        <div className="mid-ribbon">
          <div className="inner-mid-ribbon"></div>
        </div>
        <Nav />

        <div className="design-content min-height">
          <div className="design-introduction">
            <h1>Design & Creative</h1>
            {result.data?.design?.introduction.map((paragraph, index) => <p key={paragraph + index}>{paragraph}</p>)}
          </div>

          <div className="design-skills-list">
            <div className="design-skills-container">
              <h3>Skills:</h3>

              <ul>
                {result.data.design.skills.skills.map((skill, index) => {
                  let returnValue = skill

                  if (index + 1 !== result.data.design.skills.skills.length) {
                    returnValue = `${skill},`
                  }

                  return (
                    <li key={skill + index}>{returnValue}</li>
                  )
                })}
              </ul>
            </div>

            <div className="design-software-container">
              <h3>Software:</h3>

              <ul>
                {result.data.design.skills.software.map((software, index) => {
                  let returnValue = software

                  if (index + 1 !== result.data.design.skills.software.length) {
                    returnValue = `${software},`
                  }

                  return (
                    <li key={software + index}>{returnValue}</li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="design-projects">
            <div className="design-project">
              <h2>Project Name</h2>
              <img alt="Design Example" />
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  };
};

export default Design;