import React from 'react'
import '../css/Timeline.css'
import {yanfeng, magna, norr, fade_away, quali_ai} from '../media/Data'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BiSolidReport } from "react-icons/bi";
import { MdPrecisionManufacturing } from "react-icons/md";
import { SiArduino } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

function Timeline() {
  let timelineElements = [
    {
        id:1,
        title:"Yanfeng - Yanfeng Automotive Interiors",
        location:"Quality Engineering Intern - Mississauga, ON",
        description: [
            'Developed design verification procedures for component assembly lines, impacting 100,000+ Chrysler Pacifica models.',
            'Created a VBA tool to monitor OEM status for annual PPAP revalidation, reduced the expired document backlog by 86%.',
            'Analyzed supplier reject reports and scrap system data to identify defective parts, validating over $10,000 chargebacks.',
            'Issued quality alerts that reduced non-conforming parts, improved customer satisfaction and quality feedback by 73%.'
          ],
        date: "May 2023 - August 2023",
        logo: <MdPrecisionManufacturing/>,
    },
    {
        id:2,
        title:"NORR - Architects Engineers Planners",
        location:"Electrical Engineering Intern - Toronto, ON",
        description: [
            'Conducted site surveys across 240,000+ sq.ft. of Sunnybrook Hospital, documenting precise conditions and identifying limitations to inform comprehensive project decisions.',
            'Managed and manipulated datasets of 12,000+ rows in Excel using advanced library functions and custom-built scripts.',
            'Prepared and reviewed project deliverables and shop drawings, ensuring adherence to high-quality standards.',
            'Collaborated with cross-functional teams to align schedules and provide consistent project timeline updates.'
          ],
        date: "September 2022 - December 2022",
        logo: <BiSolidReport/>,
    },{
        id:3,
        title:"Magna International Inc - Modatek Systems",
        location:"Manufacturing Engineering Intern - Milton, ON",
        description: [
            'Resolved cycle time issues in assembly lines by troubleshooting and rearranging weld sequences, eliminating 2 bottlenecks and reducing their cycle times by 10.1% and 8.9%, respectively.',
            'Collaborated with Materials Department, utilizing inventory data to design and place bins/racks for improved efficiency.',
            'Created an Excel KPI dashboard consolidating data from multiple sources, developed 50+ documents for SOPs, BOM.'
          ],
        date: "January 2022 - April 2022",
        logo: <MdPrecisionManufacturing/>
    },
    {
        id:4,
        title:"Fade Away Laser Tattoo Removal",
        location:"Electronics Engineering Intern - Remote",
        description: [
            'Prototyped an end-to-end Arduino system to automate and streamline the use of cryogenic and laser devices.',
            'Implemented the I2C protocol on Arduino boards, enabling real-time wireless data transfer between remote devices.'
          ],
        date: "March 2020 - April 2020",
        logo: <SiArduino/>,
    },
    {
        id:5,
        title:"Quali AI",
        location:"Startup Engineering Intern - Kitchener, ON",
        description: [
            'Designed camera housings using SolidWorks, researching materials and mounts to optimize production costs.',
            'Independently developed a new version of the company website in 2 weeks, mastering JavaScript, React, HTML, CSS.'
          ],
        date: "January 2020 - February 2020",
        logo: <FaLaptopCode/>,
    }
  ]

  return (
    <div class='flex-timeline'>
      
      <VerticalTimeline>
        {
        timelineElements.map(element => {
            return(
                <VerticalTimelineElement
                    key={element.key}
                    date={element.date}
                    dateClassName= "date"
                    iconClassName="work-icon"
                    icon={element.logo}
                >
                <h2 class="vertical-timeline-element-title">{element.title}</h2>
                <h4 class="vertical-timeline-element-subtitle">{element.location}</h4>
                <ul className="bullet_points">
                    {element.description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
                </VerticalTimelineElement>
            )
        })
        }      
    </VerticalTimeline>
    </div>
    
  )
}

export default Timeline
