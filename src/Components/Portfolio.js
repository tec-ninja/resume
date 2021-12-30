import React, { useState } from 'react';

function Portfolio(props) {

  const [current, setCurrent] = useState(-1);

  const projects = props.data.projects.map((project, index) => {
    let projectImage = 'images/portfolio/'+project.images[0];
    return <div key={project.title} className="columns portfolio-item">
      <div className="item-wrap">
        <div onClick={() => setCurrent(index)} style={{cursor: 'pointer'}}>
          <img alt={project.title} src={projectImage}  style={{height: 120}} />
          <div className="overlay">
            <div className="portfolio-item-meta">
            <h5>{project.title}</h5>
              <p>{project.category}</p>
            </div>
          </div>
          <div className="link-icon"><i className="fa fa-link"></i></div>
        </div>
      </div>
    </div>
  });

  return (
    <section id="portfolio">
      <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Some Of My Works</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
      </div>
      {current >= 0 && <div onClick={() => setCurrent(-1)} style={{position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 30, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{width: '90%', height: '90%', backgroundColor: 'white', padding: 20}}>
          <div style={{height: '70%', width: '100%', backgroundColor: 'gray', border: '8px solid gray', display: 'flex', gap: 8}}>
            <img src={'images/portfolio/' + props.data.projects[current].images[0]} style={{width: '70%', height: '100%'}} />
            <div style={{flexGrow: 1, display: 'flex'}}>
              {props.data.projects[current].images.map(img => (
                <img src={'images/portfolio/' + img} style={{width: '33.3%', height: '16.6%'}} />
              ))}
            </div>
          </div>
          <div style={{height: '30%', display: 'flex', flexDirection: 'column', paddingTop: 20}}>
            <h6>{props.data.projects[current].subtitle}</h6>
            <div style={{overflow: 'auto', flexGrow: 1}}>
              {props.data.projects[current].descriptions.map(desc => (
                <div> • {desc}</div>
              ))}
            </div>
          </div>
        </div>
      </div>}
    </section>
  );
}

export default Portfolio;
