import React from 'react';
import myImage from '../myimg.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './home.css';

const Home = () => {
  return (
    <div className='page'>
      <div className="home-container">
        <h1>HOME</h1>
      </div>
      <div className='name'>
        <h1 className='name1'>
          <span className='hi-animation'>👋</span>Hi, I'm RAMKUMAR
        </h1>
      </div>

      <div>
        <p className="about">
          I'm studying <span className="p2b">B.Tech Information Technology</span> in Dr.NGP Institute of Technology.<br />
          I completed my schooling in Venkateshwara Vidhyalaya High School...
        </p>
      </div>
      <div className="row">
        <p className="p2">
          I’m looking for new opportunities<br />
          <span className="p2b"></span>
        </p>
        <p className="p2">
          Email:<br />
          <span className="p2b">ramkumararumugam23@gmail.com</span>
        </p>
      </div>
      <div className='photo'>
          <div className='pic'>
            <img className="images" src={myImage} alt="profile" />
            <h1>RamKumar</h1>
          </div>
      </div>
      <div className="icon-buttons">
        <a href="https://www.linkedin.com/in/rkram23" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/rkram23" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="src/myresume.pdf" download className="cv-button">Download CV</a>
      </div>
      <div>
          <h1 className='location'>
            🚩 Coimbatore
          </h1>
      </div>
    </div>
  );
}

export default Home;
