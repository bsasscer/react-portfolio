import React from 'react';
import Project from './Project';


const ProjectContainer = (props) => {
  let projects = props.data.map((project) => {
    return <Project title={project.title}
                    subtitle={project.subtitle}
                   desc={project.description}
                   img={project.img_src}
                   key={project.id} />
  });
    return (
        <div>
            <ul>
                {projects}
            </ul>
        </div>
    );
}

export default ProjectContainer;
