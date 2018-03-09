import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="item main-about-text">
                    <h1 className="headline">I'm Josephine Shmoe.</h1>
                    <p>For 3+ years I have been using my creativity and problem-solving skills to translate user feedback into scalable solutions.</p>
                </div>
                <div className="item portrait">
                    <img src="../../images/test-portrait.jpg" />
                </div>
                <h2 className="headline interests-headline">Some Favorite Things</h2>
                <div className="item about-facts">
                    <ul>
                        <li>
                            <h3>Camping & Hiking</h3>
                            <span>When I'm not building web apps, you can find me deep on a backpacking trail.</span>
                        </li>
                        <li>
                            <h3>Page-Turners</h3>
                            <span>Book suggestions welcome. I'm currently obsessed with dystopian fiction of <i>The Handmaid's Tale</i> variety.</span>
                        </li>
                        <li>
                            <h3>Dogs</h3>
                            <span>I don't have a dog currently, but if I did it would be either a Lab or a German Shepherd. Life goals.</span>
                        </li>
                        <li>
                            <h3>Coffee</h3>
                            <span>One of the key ingredients to a great morning is a latte.</span>
                        </li>
                        <li>
                            <h3>Podcasts</h3>
                            <span>Lore is my jam.</span>
                        </li>
                        <li>
                            <h3>Good beer & good company</h3>
                            <span>I've taken trips dedicated to beer, the most recent involving Oktoberfest in Munich, Germany.</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;
