import React from "react";
import "./home.css";
import containerImg from "../../assets/queue_managment_system.png";

import Section from "../../components/section/section";

import createImg from "../../assets/create.png";
import showImg from "../../assets/tablet.png";
import deleteImg from "../../assets/delete.png";

const Home = () => {
  
  return (
    <>
    <div className="header-container">
        <div className="image-container">
            <img src={containerImg} alt="quizImg" />
        </div>
        <div className="overlay">
            <div className="heading">OvS <br/>Queue Managment <br />System</div>

            <div className="description">Optimize Open vSwitch networks with our Queue Management System, enhancing data flow efficiency and ensuring streamlined and reliable network performance.</div>
            <button className="floating-button">Get Start</button>
        </div>
    </div>

    <div>
      <Section
        imageSrc = {createImg}
        topic="Create Queue"
        description="Create a queue in Open vSwitch to manage network traffic and enhance network performance."
        buttonText="Create"
        align={'left'}
      >
        {/* Your content goes here */}
        <div>
          <p>This is the content that appears when the button is pressed.</p>
        </div>
      </Section>

      <Section
        imageSrc={showImg}
        topic="Show Queue"
        description="Show information about a queue in Open vSwitch to view its configuration and status."
        buttonText="Show"
        align={'right'}
      >
        {/* Your content goes here */}
        <div>
          <p>This is the content that appears when the 'Show' button is pressed.</p>
        </div>
      </Section>

      <Section
        imageSrc={deleteImg}
        topic="Delete Queue"
        description="Delete a queue in Open vSwitch to remove it from the network configuration."
        buttonText="Delete"
        align={'left'}
      >
        {/* Your content goes here */}
        <div>
          <p>This is the content that appears when the 'Delete' button is pressed.</p>
        </div>
      </Section>
    </div>
</>

  );
};

export default Home;