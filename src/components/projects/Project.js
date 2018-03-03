import React from 'react';

const Project = (props) => (
    <li>
        <div className="project-img">
            <img className="fade-show" src={props.img} alt="project" />
        </div>
        <div className="project-copy">
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>{props.desc}</p>
        </div>
    </li>
);

export default Project;
