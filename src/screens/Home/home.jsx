import React from "react";
import "./home.css";
import containerImg from "../../assets/queue_managment_system.png";

import Section from "../../components/section/section";
import VariableForum from "../../components/VariableForum/variableForum";

import createImg from "../../assets/create.png";
import devImg from "../../assets/device.png";
import showImg from "../../assets/tablet.png";
import deleteImg from "../../assets/delete.png";
import SectionCard from "../../components/section/section";
import {createData, deleteData, fetchData, getDevices} from "../../services/onosServices";

const Home = () => {

  const addVariables = [
    ['Device Name', 'text'],
    ['Max Rate', 'integer'],
    ['Min Rate', 'integer'],
  ];

  const showVariables = [
    ['Device Name', 'text'],
    ['No of Devices', 'integer']
  ];

  const deleteVariables = [
    ['Device Name', 'text'],
  ];

  const deviceVariables = [
    ['Device Type', 'text'],
    ['Device Role', 'text'],
    ['Last Update', 'text'],
    ['Channel Id', 'text']
  ];
  
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

    <div className="section-start">
      <div className="heading" style={{textAlign: 'left'}}>
        Manage Queue
      </div>
      <SectionCard
        imageSrc = {createImg}
        topic="Create Queue"
        description="Create a queue in Open vSwitch to manage network traffic and enhance network performance."
        buttonText="Create"
        align={'left'}
        onClick={createData}
      >
        <div className="section-inner"> 
          <VariableForum variables={addVariables} />
        </div>
      </SectionCard>

      <SectionCard
        imageSrc={showImg}
        topic="Show Queue"
        description="Show information about a queue in Open vSwitch to view its configuration and status."
        buttonText="Show"
        align={'right'}
        onClick={fetchData}
      >
        <div className="section-inner">
        <VariableForum variables={showVariables} />
        </div>
      </SectionCard>

      <SectionCard
        imageSrc={deleteImg}
        topic="Delete Queue"
        description="Delete a queue in Open vSwitch to remove it from the network configuration."
        buttonText="Delete"
        align={'left'}
        onClick={deleteData}
      >
        <div className="section-inner">
          <VariableForum variables={deleteVariables} />
        </div>
      </SectionCard>
    </div>


      <div className="section-start">
        <div className="heading" style={{textAlign: 'left'}}>
          Manage Devices
        </div>

        <SectionCard
            imageSrc={devImg}
            topic="Show Devices"
            description="Show information about a devices in action and view its configuration and status."
            buttonText="Show"
            align={'right'}
            onClick={getDevices}
        >
          <div className="section-inner">
            <VariableForum variables={deviceVariables} />
          </div>
        </SectionCard>

      </div>
</>

  );
};

export default Home;
