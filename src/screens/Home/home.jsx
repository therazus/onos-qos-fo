import React from "react";
import "./home.css";

import containerImg from "../../assets/queue_managment_system.png";

import createImg from "../../assets/create.png";
import devImg from "../../assets/device.png";
import showImg from "../../assets/tablet.png";
import deleteImg from "../../assets/delete.png";

import SectionCard from "../../components/section/section";
import {createData, deleteData, fetchData, getDevices} from "../../services/onosServices";
import InfoForum from "../../components/InforForum/infoforum";

const Home = () => {
  const handleScroll = () => {
    const element = document.getElementById('Manage%20Queue');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  const addVariables = [
    ['Device Id', 'text'],
      ['Port Number', 'text'],
      ['Queue Description', 'topic'],
    ['Max Rate', 'integer'],
    ['Min Rate', 'integer'],
      ['Device Id', 'text'],
  ];

  const showVariable = [
      ['Device Id', 'text'],
      ['Port Number', 'text'],
  ];

  const deleteVariables = [
    ['Queue Id', 'text'],
  ];

//   let showDevice = [[
//     ['Device Type', 'SWITCH'],
//     ['Device Role', 'KALA'],
//     ['Last Updated Time', '16:50:45'],
//     ['Device IP', '192.168.101.2']],

//     [['Device Type', 'SWITCH'],
//     ['Device Role', 'KALA'],
//     ['Last Updated Time', '16:50:45'],
//     ['Device IP', '192.168.101.2']]
// ];

  const[showVariables, setShowVariables] = React.useState([[]]);

  const [showDevice, setShowDevice] = React.useState([[
        ['Device ID', 'D001'], 
        ['Device Type', 'SWITCH'],
        ['Device Role', 'KALA'],
        ['Last Updated Time', '16:50:45'],
        ['Device IP', '192.168.101.2']],
    
        ]);


  const [showQueueDetails, setShowQueueDetails] = React.useState([[
        ['Device Id', 'f'],
        ['Port Number', ''],
        ['Queue Description', 'topic'],
        ['Max Rate', ''],
        ['Min Rate', ''],
        ['Device Id', '']
  ],]);




  const onClickShow = async () => {
    const data = await getDevices();
    if(data){
      let temp = [];
      data.map((device, index)=>(
        temp.push([
          ['Device Type', device.type],
          ['Device Role', device.role],
          ['Last Updated Time', device.lastUpdated],
          ['Device IP', device.ip]
        ])
      ))
      setShowVariables(temp);
    }
  }




  const [isShowQueueDetails, setIsShowQueueDetails] = React.useState(false);
  const onClickShowQueue = async () => {
    // const data = await fetchData();
    // if(data){
    //   let temp = [];
    //   data.map((device, index)=>(
    //     temp.push([
    //         ['Device Id', device.deviceId],
    //         ['Port Number', device.portNumber],
    //         ['Queue Description', 'topic'],
    //         ['Max Rate', device.maxRate],
    //         ['Min Rate', device.minRate],
    //         ['Device Id', device.deviceId]
    //     ])
    //   ))

    //   setShowQueueDetails(temp);
      
    // }
    console.log("Show Queue Details");
    setIsShowQueueDetails(true);
  }
  

  return (
    <>
    <div className="header-container" id='Home'>
        <div className="image-container">
            <img src={containerImg} alt="quizImg" />
        </div>
        <div className="overlay">
            <div className="heading">OvS <br/>Queue Managment <br />System</div>

            <div className="description">Optimize Open vSwitch networks with our Queue Management System, enhancing data flow efficiency and ensuring streamlined and reliable network performance.</div>
            <button className="floating-button" onClick={handleScroll}>Get Start</button>
        </div>
    </div>

    <div className="section-start" id="Manage%20Queue">
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
        type={'var'}
        variables={addVariables}
      >
      </SectionCard>

      <SectionCard
        imageSrc={showImg}
        topic="Show Queue"
        description="Show information about a queue in Open vSwitch to view its configuration and status."
        buttonText="Show"
        align={'right'}
        onOperateButtonClick={onClickShowQueue}
        type={'var'}
        variables={showVariable}
      >
        {isShowQueueDetails && showQueueDetails.length !== 0 ?
                showQueueDetails.map((variable, index) => (
                  <InfoForum variables={variable} key={index} />
                )) :
                console.log("No data")}
      </SectionCard>

      <SectionCard
        imageSrc={deleteImg}
        topic="Delete Queue"
        description="Delete a queue in Open vSwitch to remove it from the network configuration."
        buttonText="Delete"
        align={'left'}
        onClick={deleteData}
        type={'var'}
        variables={deleteVariables}
      >
      </SectionCard>
    </div>


      <div className="section-start" id="Manage%20Devices">
        <div className="heading" style={{textAlign: 'left'}}>
          Manage Devices
        </div>

        <SectionCard
            imageSrc={devImg}
            topic="Show Devices"
            description="Show information about a devices in action and view its configuration and status."
            buttonText="Show"
            align={'right'}
            onClick={ onClickShow}
            type={'info'}
            variables={showDevice}
        >
        </SectionCard>

      </div>
</>

  );
};

export default Home;
