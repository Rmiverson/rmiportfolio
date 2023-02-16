import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import SocialBar from "../../components/SocialBar";
import Splash from "../../components/Splash";
import Footer from '../../components/Footer';

import './AboutMe.scss'

const AboutMe = () => {
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
      <div className="about-me">
        <div className="landing">
          <div className="splash-content">
            <Splash />
            <div className="landing-ribbon">
              <div className="inner-landing-ribbon"></div>
            </div>
          </div>

          <div className="mid-ribbon-container">
            <div className="mid-ribbon-corner-l">
              <div className="inner-mid-ribbon-corner-l"></div>
            </div>

            <div className="mid-ribbon">
              <div className="inner-mid-ribbon"></div>
            </div>

            <div className="mid-ribbon-corner-r">
              <div className="inner-mid-ribbon-corner-r"></div>
            </div>           
          </div>
        </div>

        <div className="lower-content">
          <div className="body-ribbon">
            <div className="inner-body-ribbon"></div>
          </div>

          <div className="main-body">
            <Nav />
            <h2>About Me</h2>
            {result.data?.aboutMe?.map((value, index) => {
              if (index === 0) {
                return (
                  <div className="about-introduction" key={value}>
                      <img alt="Riley Iverson" src="media/ProfilePicture192.jpg" />
                      <p>{value}</p>
                  </div>
                )
              } else {
                return (
                  <p key={value}>{value}</p>
                )
              };
            })}

            <SocialBar />

            <div className="download">
              <h3>Download My Resume</h3>
              <a href={result.data?.resume}>Download</a>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    );
  };
};

export default AboutMe;