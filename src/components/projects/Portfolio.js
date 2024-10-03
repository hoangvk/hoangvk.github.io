import React from 'react'
import {portfolio_code, scoutingRobert, morphological, designConcepts, rampAssembly, robertOld, flowchart, robertVid, spinning} from '../media/Data'

function Portfolio() {
  return (
    <div>
      <h1>PORTFOLIO</h1>
      <p><strong>Project Scope: </strong>This personal website project was created to showcase my background, technical projects, and personal interests as a Mechatronics Engineering graduate. The site is designed to provide visitors with a clear overview of my academic and professional journey, as well as highlight my creative pursuits. The primary goal of this project was to create a visually appealing platform to present my skills, experience, and interests. Although this project was limited to front-end development, I thoroughly enjoyed the process of structuring the site and integrating different components. <br></br><br></br>
      <strong>Implementation: </strong> For this project, I chose React because of its component-based structure, which allows for reusable code and modular development. This approach made it easier to manage different sections of the website, ensuring clean, organized code while also facilitating future updates. React's virtual DOM was a key factor, as it improved performance by efficiently updating only the parts of the page that needed changes, resulting in a faster and smoother user experience. Additionally, React's extensive ecosystem of libraries made integrating extra functionality like animations and navigation straightforward, allowing me to focus on building a cohesive user experience.<br/><br/>
      Meanwhile, I chose CSS for styling due to its versatility and power in creating visually appealing designs. CSS allowed me to fine-tune the layout, animations, typography, and overall look of the site, ensuring a consistent, polished aesthetic across all devices and enhancing the interactivity and user engagement. <br/><br/>
      As someone fairly new to front-end development, I found React and CSS easy to grasp due to their simplicity. Overall, this project was a great introduction to the world of front-end development. The ease with which I picked up React and CSS has sparked my excitement to dive deeper into full-stack development in the future, as I continue learning and expanding my skills.<br/><br/>
      <img src={portfolio_code} class="modal-imgs"></img>
      </p>
    </div>
  )
}

export default Portfolio
