import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <div className="skills-donut-chart"></div>
                <div className="item portrait"></div>
                <div className="skills-key">
                    <div className="skill-type">
                        <p>
                            <span className="skill-color skill-web"></span>
                            Web Development
                        </p>
                    </div>
                    <div className="skill-type">
                        <p>
                            <span className="skill-color skill-ui"></span>
                            UX/UI
                        </p>
                    </div>
                    <div className="skill-type">
                        <p>
                            <span className="skill-color skill-mobile"></span>
                            Mobile Development
                        </p>
                    </div>
                </div>
                <h2 className="my-name">Hi, I'm Josephine Shmoe.</h2>
                <div className="about wrapper multicol">
                    <p>For 3+ years I have been using my creativity and problem-solving skills to translate user feedback into scalable solutions. The first ascent, made in June from the Paris Observatory, though a lofty one, was attended with so much danger and confusion as to be barren of results. The departure, owing to stormy weather, was hurried and illordered, so that the velocity in rising was excessive, the net constricted the rapidly-swelling globe, and the volumes of out-rushing gas half-suffocated the voyagers. Then a large rent occurred, which caused an alarmingly rapid fall, and the two philosophers were reduced to the necessity of flinging away all they possessed, their instruments only excepted. The landing, in a vineyard, was happily not attended with disaster, and within a month the same two colleagues attempted a second aerial excursion, again in wet weather.
                    </p>
                </div>
                <div className="middle">
                    <div className="middle-copy">
                        <p className="intro-desc">Banjo bitters vinyl iceland occupy. Edison bulb knausgaard semiotics authentic art party church-key tote bag kogi locavore cliche pork belly.</p>
                    </div>
                    <div className="another-img">
                        <img src="../../images/placeholder-hero.jpg" />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
