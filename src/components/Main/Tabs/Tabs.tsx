import { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import HomeContent from "./HomeContent";
import IntroducingContent from "./IntroducingContent";
import DemoVideo from "./DemoVideo";
import { AiFillHome, AiOutlineRobot } from "react-icons/ai";
import { RiVideoLine } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import "./Tabs.css";
import AddonBtn from "./AddonBtn";

function FillExample() {
  const [key, setKey] = useState("home");
  useEffect(() => {}, [key]);
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
      activeKey={key}
      onSelect={(k: any) => setKey(k)}
    >
      <Tab
        eventKey="home"
        title={
          <span>
            <AiFillHome /> Home
          </span>
        }
      >
        <HomeContent></HomeContent>
      </Tab>
      <Tab
        eventKey="Demo Bot List"
        title={
          <span>
            <AiOutlineRobot /> Demo Bot List
          </span>
        }
      >
        <IntroducingContent></IntroducingContent>
      </Tab>
      <Tab
        eventKey="Demo Video"
        title={
          <span>
            <RiVideoLine /> Demo Video
          </span>
        }
      >
        <AddonBtn></AddonBtn>
        <DemoVideo></DemoVideo>
      </Tab>
      <Tab
        eventKey="contact"
        title={
          <span>
            <BiPhoneCall /> Contact
          </span>
        }
        disabled
      >
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default FillExample;
