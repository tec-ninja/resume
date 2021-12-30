import React, { useState } from 'react';

function Portfolio(props) {

  const [current, setCurrent] = useState(-1);
  const [activeImage, setActiveImage] = useState(0);

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

  const closeModal = () => {
    setCurrent(-1);
    setActiveImage(0);
  };

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
      {current >= 0 && <div onClick={closeModal} style={{position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, zIndex: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
        <div style={{width: '90%', height: '90%', backgroundColor: 'white', padding: 20}} onClick={(e) => e.stopPropagation()}>
          <div style={{height: '100%', width: '100%', display: 'flex', gap: 8}}>
            <div style={{width: '80%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.72)', padding: 8}}>
              <img src={'images/portfolio/' + props.data.projects[current].images[activeImage]} style={{width: '100%', height: '90%'}} />
              <div style={{flexGrow: 1, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1%', overflow: 'auto'}}>
                {props.data.projects[current].images.map((img, index) => (
                  <div key={index} onClick={() => setActiveImage(index)} style={{position: 'relative', width: '7.2%', paddingTop: 8}}>
                    <div style={{position: 'absolute', zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%', top: 0, left: 0, display: activeImage === index ? 'none' : 'block'}}></div>
                    <img src={'images/portfolio/' + img} style={{height: '100%'}} />
                  </div>
                ))}
              </div>
            </div>
            <div style={{width: '20%', display: 'flex', flexDirection: 'column'}}>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{fontWeight: 'bold', color: 'black'}}>{props.data.projects[current].title}</div>
                  <div style={{width: 8, height: 8, fontWeight: 'bold', color: 'black', cursor: 'pointer'}} onClick={closeModal}>✖</div>
              </div>
              <div style={{flexGrow: 1, overflow: 'auto'}}>
                <div style={{color: 'black', fontSize: 13}}>{props.data.projects[current].subtitle}</div>
                {props.data.projects[current].descriptions.map(desc => (
                  <div key={desc} style={{fontSize: 12}}> • {desc}</div>
                ))}
              </div>
            </div>
            
          </div>
          
        </div>
      </div>}
    </section>
  );
}

export default Portfolio;
