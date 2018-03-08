import React, {Component} from 'react';
import Entry from './Entry';
import entries from '../entries';


class Work extends React.Component {
    render() {
        return (
            <div>
                <h1>Selected Work</h1>
                <ul className="entries">
                    {Object.keys(entries).map(key => (
                        <Entry key={key} details={entries[key]} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Work;
