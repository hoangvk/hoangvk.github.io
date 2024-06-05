import React from 'react'
import {appleCrispPoster, appleCrispVid} from '../media/Data'

function Apple_crisp() {
  return (
    <div>
      <h1>APPLE CRISP</h1>
      <p><strong>Introduction: </strong>Apple Crisp is our exciting 4th-year capstone design project. In a team of four, we embark on a mission to revolutionize organic waste management! Inspired by the 13th Sustainable Development Goal of the United Nations, we are dedicated to combatting climate change by reducing greenhouse gas emissions from landfills. <br></br><br></br>
      <strong>Project Scope: </strong>The challenges arises in the low composting rates in multi-residential buildings where accessible organic waste collection is limited. Through stakeholders analysis and consideration of the project timeline, we focus on the refined problem statement: design an indoor system to increase composting rates. <br></br><br></br> 
      Our design goals can be summarized in three key points:
      <ul class="bullet_points">
        <li>Diverts food scraps from landfill</li>
        <li>Accessible</li>
        <li>Safe and sanitary</li><br></br>
      </ul>
      <strong>Solution:</strong> We went through the process of establishing design specifications, including objectives, constraints and criteria to evaluate alternative designs. The selected final design aimed at resolving the identified issue is a dry composting device, which integrates two essential mechanisms: breaking down food scraps and dehydrating moisture. I am the mechanical lead for this project. To explore the detailed design process, please visit:
      <a class="link" href="https://applecapstone.wixsite.com/apple-crisp">Apple Crisp website</a>, and 
      <a class="link" href="https://github.com/hoangvk/Capstone_Mech/tree/master">Apple Crisp github</a>.
      Among 60 teams, our team was one of the four nominated for the Sustainability Award. <br/><br/>
      <img src={appleCrispPoster} class='poster'></img> <br/><br/>
      <video class="video" src={appleCrispVid} type="video/mp4" muted controls>This browser does not support the video tag.</video>
      </p>
    </div>
  )
}

export default Apple_crisp
