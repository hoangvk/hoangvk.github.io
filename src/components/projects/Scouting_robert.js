import React from 'react'
import {scoutingRobert, morphological, designConcepts, rampAssembly, robertOld, flowchart, robertVid, spinning} from '../media/Data'

function Scouting_robert() {
  return (
    <div>
      <h1>SCOUTING ROBERT</h1>
        <p><strong>The challenge: </strong>Scouting Robert is our third-year design project. The goal was to construct an autonomous
          device capable of traversing a 1-meter vertical wall and searching a red pole on the other side. Note that the starting orientation can be modified, and 
          part of the wall is made of steel sheet metal and on one edge of the wall has a ramp up and down. Our team of 6 worked on analyzing objectives,
          establishing criteria, constraints, risk mitigation plans, and refining the design process. The design would be marked against the numbers of attempts 
          needed and the time taken to successfully complete the course, in addition to the mass of the entire system. <br/><br/>
          <strong>Conceptual design: </strong>Presented below are the three key design concepts (launching over air, climbing the steel sheet and driving up the ramp),
          and a morphological chart outlining potential subsystem options generated through the conceptual design process. <br/>
          <div class ='design-concepts-container'>
            <img src={designConcepts} class='design-concepts'></img>
            <img src={morphological} class='design-concepts'></img>
          </div>               
          Alternatives were evaluated using a decision matrix which consider various weighing factors built upon the previously mentioned marking scheme, prototype complexity and performance consistency. 
          In addition, since the project timeline is restricted within 3 months and the budget is limited at $150, the final decision was a differential wheeled ramp climbing car.<br/><br/>
         <strong>Preliminary design: </strong>To ensure stable performance as the robot ascends the ramp, a key concept involves incorporating stepped wheels. The inner step rests on top of the ramp,
          while the outer step clamps securely on the side, maintaining proper positioning throuhgout the climbing process and preventing the robot from slipping off, as illustrated above.
          The two driving wheels are strategically chosen to be positioned at the back to handle the weight during the ascent. Caster wheels at the front facilitate auto alignment with the ramp. <br/><br/>
          For effective navigation across the field, distance sensors were selected. Considering that the robot's starting orientation is adjustable and the target red pole lies within the region 
          between the wall and the end of the ramp, we opted for an ultrasonic sensor at the front and a time-of-flight (ToF) sensor on one side of the robot. This configuration is sufficient for
          detecting the ramp, pole and course perimeter. The standard 3 view and model view representations of the initial design assembly of the robot can be seen below.<br/> <br/>
          <img src={rampAssembly} class='modal-imgs'></img><br/>
          <strong>Mechanical design: </strong>Within this project, I exclusively contribute to the mechanical team. In our decision-making process, the main objective is to 
          optimize material usage for cost efficiency and system weight reduction while ensuring consistent performance. We initially designed the essential components in their most fundamental configurations. 
          These components were then either 3D printed or laser cut, and integrated to create the first prototype, as showcased below: 
          <div class ='design-concepts-container'>
            <img src={robertOld} class='design-concepts'></img>
            <video src={spinning} class='design-concepts' type="video/mp4" loop muted autoplay="true">This browser does not support the video tag.</video>
          </div>
          To enhance modularity, the wheel design incorporates separate gears connecting to the motor, eliminating the need for frequent wheel redesigns during motor changes. The stepped wheels underwent several
          design iterations, primarily adjusting step dimensions for sufficient grip on the ramp. Initially, tape was applied to the wheel for increased friction, but later iterations favored the more effective use
          of elastic bands in the final design.<br/><br/>
          The 3D-printed caster wheels tended to loosen quickly, leading to the uncontrolled spinning behavior of the robot as shown in the above video. To address this issue, a ball caster from McMaster-Carr was used 
          despite the additional weight of the stainless steel ball. This adjustment significantly improved the robot's alignment accuracy, showcasing a favorable trade-off for enhanced performace. <br/><br/>
          The original balsa wood chassis exhibits a tendency to bend, which affected motor behavior. Consequently, it was replaced with a PLA chassis, featuring reduced side dimensions at the front to optimize 
          weight without compromising hardware support. An additional platform was added to accommodate the battery's weight.<br/><br/>
          The final physical built of the robot car is as shown below: <br/>
          <img src={scoutingRobert} class="robert_img"></img><br/>
          <strong>Hardware and Software: </strong> I collaborated with my team members to develop software and build hardware that facilitates the autonomous navigation of the robot. 
          The flow chart illustrating various navigation actions is as shown below and the source code for this robot can be found from the following link:
          <a class="link" href="https://github.com/nicquil/MTE380">Scouting Robert github</a>.<br/>
          <img src={flowchart} class="modal-imgs" style={{width:"100%"}}></img><br/>
          <strong>Result: </strong>
          The final robot, weighing 648g, successfully completed the course in 28s, securing 3rd place out of 21 competing groups.<br/><br/>
          <video class="video" src={robertVid} type="video/mp4" controls>This browser does not support the video tag.</video>
        </p>
    </div>
  )
}

export default Scouting_robert
