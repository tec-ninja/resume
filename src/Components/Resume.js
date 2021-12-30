import React from 'react';

function Resume(props) {

  const { skillmessage, education, work, skills } = props.data;

    const educationsComp = education.map(function(education){
      return <div key={education.school}><h3>{education.school}</h3>
      <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      <p>{education.description}</p></div>
    })
    const worksComp = work.map(function(work){
      return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
      </div>
    })
    const skillsComp = skills.map(function(skills){
      let className = 'bar-expand '+skills.name.toLowerCase();
      return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
    })

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {educationsComp}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {worksComp}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skillsComp}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
}

export default Resume;
