import React from 'react';
import Entry from './Entry';
import entries from '../entries';


class Work extends React.Component {
    render() {
        return (
            <div className="entries">
                <h2>Selected Work</h2>
                {Object.keys(entries).map(key => (
                    <Entry key={key} details={entries[key]} />
                ))}
            </div>
        );
    }
}

export default Work;
