import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="home-copy">
                    <h1 className="intro-header">Josephine Shmoe</h1>
                    <p className="intro-desc">A Full Stack Developer living and working in Saskatchewan.</p>
                </div>
                <div className="home-img">
                    <img src="../../images/placeholder-hero.jpg" />
                </div>
            </div>
        );
    }
}

export default Home;
