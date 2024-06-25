import React from "react";
import img_1 from "../../assets/about_img.gif";
import './About.css';

const About = () => {
  return (
    <>
      <div className="about_container">
        <img src={img_1} alt="" />
        <div class="about_info">
          <div className="about_content">
            <h1>Introduction of AI</h1>
            <p>
              Artificial intelligence allows machines to replicate the
              capabilities of the human mind. From the development of
              self-driving cars to the proliferation of smart assistants like
              Siri and Alexa, AI is a growing part of everyday life. As a
              result, many tech companies across various industries are
              investing in artificially intelligent technologies.
            </p>
          </div>
          <div className="about_content">
            <h2>WHAT IS ARTIFICIAL INTELLIGENCE</h2>
            <p>
              Artificial intelligence is a wide-ranging branch of computer
              science concerned with building smart machines capable of
              performing tasks that typically require human intelligence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
