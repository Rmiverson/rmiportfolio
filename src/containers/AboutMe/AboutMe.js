import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import SocialBar from "../../components/SocialBar";
import Splash from "../../components/Splash";
import Footer from '../../components/Footer';
import Tilt from 'react-parallax-tilt';
import { BsCloudDownload } from 'react-icons/bs'

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

          <div className="main-body min-height">
            <section className="main-body-content">
              <Nav />
              {result.data?.aboutMe?.introduction.map((value, index) => {
                if (index === 0) {
                  return (
                    <div className="about-introduction" key={value}>
                        <Tilt>
                          <img alt="Riley Iverson" src="media/ProfilePicture192.jpg" />  
                        </Tilt>

                        <div className="about-introduction-content">
                          <h2>About Me</h2>
                          <p>{value}</p>
                        </div>
                    </div>
                  )
                } else {
                  return (
                    <p key={value}>{value}</p>
                  )
                };
              })}

              <div className="education">
                <h2>Education</h2>
                {result.data?.aboutMe?.education.map((item, index) => {
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

              <SocialBar />

              <div className="download">
                <h3>Download My Resume</h3>
                <a href={result.data?.resume}><BsCloudDownload /></a>
              </div>              
            </section>

            <Footer />
          </div>
        </div>
      </div>
    );
  };
};

export default AboutMe;