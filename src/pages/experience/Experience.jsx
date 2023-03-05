import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015-2016"
          iconStyle={{ background: "#3e497a", color: '#fff' }}
          icon={<WorkIcon />}
        >
           <h3 className="vertical-timeline-element-title">
            Chef/Manager -  Pizza Express
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Londres, England
          </h4>
          <p>Daily Operation supervision, including menu planning, food preparation and kitchen management staff.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016-2018"
          iconStyle={{ background: "#3e497a", color: '#fff' }}
          icon={<WorkIcon />}
        >
           <h3 className="vertical-timeline-element-title">
            Team Manager -  Noonan Cleaning Limited
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Galway, Ireland
          </h4>
          <p>Supervise team of cleaners and ensure that they are performing their duties effectively and efficiently. My responsibilities include managing work schedules, assigning tasks, training new team members, and monitoring the quality of work..</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2021"
          iconStyle={{ background: "#3e497a", color: '#fff' }}
          icon={<WorkIcon />}
        >
           <h3 className="vertical-timeline-element-title">
            Software Tester - Medtronic, Medical Technology, Services and Solutions Global
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Galway, Ireland
          </h4>
          <p>Install and test the E360 and Puritan Bennett 980 ventilator models to ensure they meet the required specifications and performance standards.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2022"
          iconStyle={{ background: "#3e497a", color: '#fff' }}
          icon={<WorkIcon />}
        >
           <h3 className="vertical-timeline-element-title">
            Legal intern - Baciclides Basso Junior Individual Law Firm
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Americana, Brazil
          </h4>
          <p>Assist lawyers and other legal professionals with a variety of tasks, including conducting research, drafting legal documents, and attending client meetings and court proceedings.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2023"
          iconStyle={{ background: "#3e497a", color: '#fff' }}
          icon={<WorkIcon />}
        >
           <h3 className="vertical-timeline-element-title">
            Front End Developr - Freelancer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            São José do Rio Preto, Brazil
          </h4>
          <p>Freelance web developer, specialize in building projects using React, JavaScript, and TypeScript. I work independently to develop and deliver high-quality web applications,</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
