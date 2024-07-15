import React from 'react';
import './about.css';
import myImage from './images/dev.jpg';
import html from './images/html.jpg';
import excel from './images/excel.jpg';
import figmaLogo from './images/figma.jpg';
import js from './images/js.jpg';
import cssLogo from './images/css.jpg';
import reactLogo from './images/react.jpg';
import nodejsLogo from './images/node.jpg';
import pythonLogo from './images/python.jpg';
import java from './images/java.jpg';
import powerbi from './images/powerbi.jpg';
import mongodb from './images/mongodb.jpg';
import mysql from './images/mysql.jpg';
import project1 from './images/project1.jpg';
import project2 from './images/project2.jpg';
import project3 from './images/project3.jpg';
import certificate1 from './images/certificate1.jpg';
import certificate2 from './images/certificate2.jpg';
import certificate3 from './images/certificate3.jpg';

const About = () => {
  return (
    <>
      <div className="about-container">
        <h1>ABOUT</h1>
      </div>
      <div className='aboutcontent'>
        <p style={{ fontWeight: 800 }}>I'm Ramkumar A. from Tamil Nadu, and I'm shaping tomorrow with my designs</p>
        <p>I've accumulated a diverse portfolio of projects over the years, each representing significant milestones in my journey. Many of these projects are open-source, inviting exploration and contributions. If you're curious about any of my work, feel free to delve into the codebase and share your ideas for improvements or enhancements. Collaborating with fellow developers is a valuable opportunity for mutual learning and growth, and I'm eager to embrace new insights and feedback.</p>
        <div className='dev_image'>
          <img className='dev' src={myImage} alt="profile" />
        </div>
      </div>
      <div className="Education">
        <div className="half">
          <p style={{ fontWeight: 800 }}>EDUCATION :</p>
          <p>B.Tech Information Technology  (2021-2025)</p>
          <p>Dr.N.G.P Institute of Technology, Coimbatore, India.</p>
          <p>CGPA : 7.5</p>
        </div>
        <div className="half">
          <p style={{ fontWeight: 800 }}>Schooling's :</p>
          <p>Higher Secondary (2020-2021)</p>
          <p>Venkateshwara Vidhyalaya High School, Tiruppur, India.</p>
          <p>Percentage : 84%</p>
        </div>
      </div>
      <div className="skills">
        <div className="title">
          <h1 style={{ 
            fontWeight: 1000, 
            textAlign: 'center', 
            border: '2px solid #b048ffc5',
            borderRadius:'10px', 
            display: 'inline-block', 
            padding: '10px', 
            marginLeft:'700px',
            }}>SKILLS
          </h1>
          <div className="skills-wrapper">
            <div className="skills-container">
              <div className="skill-card">
                <img src={html} alt="HTML" />
                <span>HTML</span>
              </div>
              <div className="skill-card">
                <img src={excel} alt="Excel" />
                <span>Excel</span>
              </div>
              <div className="skill-card">
                <img src={figmaLogo} alt="Figma" />
                <span>Figma</span>
              </div>
              <div className="skill-card">
                <img src={js} alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="skill-card">
                <img src={cssLogo} alt="CSS" />
                <span>CSS</span>
              </div>
              <div className="skill-card">
                <img src={reactLogo} alt="React" />
                <span>React</span>
              </div>
              <div className="skill-card">
                <img src={nodejsLogo} alt="Node.js" />
                <span>Node.js</span>
              </div>
              <div className="skill-card">
                <img src={pythonLogo} alt="Python" />
                <span>Python</span>
              </div>
              <div className="skill-card">
                <img src={java} alt="Java" />
                <span>Java</span>
              </div>
              <div className="skill-card">
                <img src={powerbi} alt="Power BI" />
                <span>Power BI</span>
              </div>
              <div className="skill-card">
                <img src={mongodb} alt="MongoDB" />
                <span>MongoDB</span>
              </div>
              <div className="skill-card">
                <img src={mysql} alt="MySQL" />
                <span>MySQL</span>
              </div>
              {/* Repeat the skills to make the scrolling loop seamless */}
              <div className="skill-card">
                <img src={html} alt="HTML" />
                <span>HTML</span>
              </div>
              <div className="skill-card">
                <img src={excel} alt="Excel" />
                <span>Excel</span>
              </div>
              <div className="skill-card">
                <img src={figmaLogo} alt="Figma" />
                <span>Figma</span>
              </div>
              <div className="skill-card">
                <img src={js} alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="skill-card">
                <img src={cssLogo} alt="CSS" />
                <span>CSS</span>
              </div>
              <div className="skill-card">
                <img src={reactLogo} alt="React" />
                <span>React</span>
              </div>
              <div className="skill-card">
                <img src={nodejsLogo} alt="Node.js" />
                <span>Node.js</span>
              </div>
              <div className="skill-card">
                <img src={pythonLogo} alt="Python" />
                <span>Python</span>
              </div>
              <div className="skill-card">
                <img src={java} alt="Java" />
                <span>Java</span>
              </div>
              <div className="skill-card">
                <img src={powerbi} alt="Power BI" />
                <span>Power BI</span>
              </div>
              <div className="skill-card">
                <img src={mongodb} alt="MongoDB" />
                <span>MongoDB</span>
              </div>
              <div className="skill-card">
                <img src={mysql} alt="MySQL" />
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="title">
          <h1 style={{ 
            fontWeight: 1000, 
            textAlign: 'center', 
            border: '2px solid #b048ffc5',
            borderRadius:'10px', 
            display: 'inline-block', 
            padding: '10px', 
            marginLeft:'700px',
            }}>PROJECTS</h1>
        </div>
        <div className="projects-container">
          <div className="project">
            <img src={project1} alt="Project 1" style={{ width: '100%', height: 'auto' }} />
            <h2 style={{ color: '#0e3742' }}>Wild-Run</h2>
            <p style={{ color: '#0e3742' }} >This game is based on chrome dino game using html,css,JavaScript and MySQL</p>
            <a href="https://github.com/rkram23/WildRun-game.git" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
          </div>
          <div className="project">
            <img src={project2} alt="Project 2" style={{ width: '100%', height: 'auto' }} />
            <h2 style={{ color: '#0e3742' }}>Portfolio Website</h2>
            <p style={{ color: '#0e3742' }}>Personal portfolio website using React-Vite</p>
            <a href="https://personal-portfolio-rust-mu.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
          </div>
          <div className="project">
            <img src={project3} alt="Project 3" style={{ width: '100%', height: 'auto' }} />
            <h2 style={{ color: '#0e3742' }}>Automatic OMR MCQ grading System</h2>
            <p style={{ color: '#0e3742' }}>This project utilizes image processing techniques in Python to automatically grade multiple-choice question (MCQ) answer sheets.</p>
            <a href="https://github.com/rkram23/Automatic-OMR-Grading.git" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
          </div>
        </div>
      </div>
      <div className="certificates">
        <div className="title">
          <h1 style={{ 
            fontWeight: 1000, 
            textAlign: 'center', 
            border: '2px solid #b048ffc5',
            borderRadius:'10px', 
            display: 'inline-block', 
            padding: '10px', 
            marginLeft:'700px',
            }}>CERTIFICATES</h1>
        </div>
        <div className="certificates-container">
          <div className="certificate">
            <img src={certificate1} alt="Certificate 1" style={{ width: '100%', height: 'auto' }} />
            <h2 style={{ color: '#0e3742' }}>Data Structure and Algorithms using java</h2>
          </div>
          <div className="certificate">
            <img src={certificate2} alt="Certificate 2" style={{ width: '100%', height: 'auto' }} />
            <h2 style={{ color: '#0e3742' }}>React Js</h2>
          </div>
          <div className="certificate">
            <img src={certificate3} alt="Certificate 3" style={{ width: '100%', height: 'auto' }} />
            <h2 style={{ color: '#0e3742' }}>Data Science for IOT</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
