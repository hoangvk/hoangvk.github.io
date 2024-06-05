import React from 'react'
import {overCycle, cradleTop, cradleBottom} from '../media/Data'

function W2R_Bottleneck() {
  return (
    <div>
        <h1>W2R BOTTLENECK ELIMINATION</h1>
        <p><strong>Introduction: </strong> During my internship at Magna Modatek Systems, I undertook a project focused on improving the productivity of the W2 Rear (W2R) assembly line. The "W2" designation denotes a revision of the original General Motors W-platform, which served as the underpinning design for both mid-size and full-size front-wheel-drive cars. Collaborating with a senior engineer in the Manufacturing Engineering Department, our main goal was to tackle the ongoing issue of low production output.<br/><br/>
        We delved into the concept of Overall Equipment Effectiveness (OEE), an important measure for evaluating assembly line performance, considering factors like machine availability, speed, and product quality. The line consistently fell short in terms of OEE, operating at just 48% efficiency, well below the industry standard of 60%.<br/><br/>
        <strong>Project Scope: </strong> With input from the Quality, Materials, and Maintenance departments, our team set out to conduct a thorough analysis, pinpoint bottlenecks, and propose practical solutions to boost OEE. We established the following key objectives:
        <ul class="bullet_points">
          <li>Our proposed changes needed to be implemented within a week to prevent disruptions to production schedules.</li>
          <li>We aimed to minimize both monetary and labor resources, simplifying approval processes and easing the burden on maintenance.</li>
          <li>The solutions we proposed had to be adaptable, allowing for quick adjustments in case of unexpected issues without negatively impacting productivity.</li><br></br>
        </ul>
        <strong>Data collection: </strong>To optimize the assembly line, initial steps included collecting data on cycle times, equipment conditions, and station availability. Accurate data is crucial for decision-making and reducing risks of unexpected outcomes.
        The ideal cycle time was calculated to ensure the line's efficiency and prevent bottlenecks and underproduction. By considering factors like expected run-time per shift and required throughput, the ideal cycle time was set at 94.2 seconds per part.
        Cycle times were recorded and data from 10 cycles were averaged for accuracy. Operator time and machine time were separated to account for variances in physical strength and productivity. 
        Analysis revealed that stations 10, 80, and 90 were over cycle. Since station 90 was a welding inspection booth, it was excluded from the rearrangement plan as its performance depended on the quality of finished products.
        Maintenance checks revealed worn-out datum pins, though no major equipment failures were noted. Observations identified available spaces for additional robots if needed, ensuring flexibility for future adjustments.
        Double and triple welding passes were common, affecting cycle times. By reviewing camera footage, double passes were found in station 20 and stations 10 and 80, with the latter impacting productivity due to their cycle times exceeding the ideal limit.<br/><br/>
        <strong>Solution: </strong>
        <div class ='design-concepts-container'>
          <img src={cradleTop} class='design-concepts'></img>
          <img src={cradleBottom} class='design-concepts'></img>
        </div>
        The initial solution considered was redesigning the weld sequences, but this approach was complex and would likely necessitate extensive changes across multiple stations, along with considerable paperwork and major disruptions. Thus, we opted for a more efficient method: relocating the double and triple passing within and among stations, focusing on optimizing time, cost, and labor. Weld sequences for the top view and the bottom view of a rear craddle is provided above for your reference. Key considerations are as followed:
        <ul class="bullet_points">
          <li>Ensuring all workstations have similar cycle times to avoid bottlenecks.</li>
          <li>Ensuring stations are compatible for weld transfers, considering regular and upside-down clamping positions</li>
          <li>Spacing out repeated welds to prevent overheating and maintain quality.</li><br></br>
        </ul>
        <img src={overCycle} class='modal-imgs'></img><br/>
        From the data analysis as shown in the above picture, we identified stations 40, 50, 70, 100, and 110 as potential candidates for relocating weld tasks. However, stations 40 and 50 were operating near their cycle time limits, making them unsuitable for additional welding actions. Stations 100 and 110 had dedicated functions that couldn't accommodate welding tasks. 
        Meanwhile, station 70 had available space and time, making it a prime candidate for relocating welds. It could share work with stations 10 and 80, which had upside-down welding capabilities. <br/><br/>
        <strong>Implementation: </strong>
        <ul class="bullet_points">
          <li>New Robot in Station 70: handled vertical welds and double passing from station 80.</li>
          <li>Transfers Among Robots: weld IDs were reallocated within stations 10 and 80 or transferred to the new robot in station 70 to balance the workload and reduce the cycle times of the slowest robots.</li><br/>
        </ul>
        <strong>Result: </strong>The implementation theoretically resulted in significant cycle time reductions. Station 10 saw a reduction of 10 seconds, bringing its overall cycle time to 89 seconds. Station 80 experienced a 9 seconds reduction, resulting in a cycle time of 92 seconds. Both of these improvements brought the cycle times within the ideal limit of 94.2 seconds.<br/><br/>

        In practice, the project took 5 days: 2 days for PLC reprogramming and 3 days for inspection. Cameras monitored stations 10, 70, and 80 to ensure smooth operation and detect any issues. Stations 10 and 80 showed a minor increase of 2 seconds each, while station 70 had a slight cycle time increase of 2 seconds due to a new double passing. Despite these minor deviations, the overall cycle time remained within the acceptable limit.
        </p>
    </div>
  )
}

export default W2R_Bottleneck