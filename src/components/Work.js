import React from 'react';
import Entry from './Entry';
import entries from '../entries';


class Work extends React.Component {

    render() {
        return (
            <ul className="entries">
                {Object.keys(entries).map(key => (
                    <Entry key={key} details={entries[key]} />
                ))}
            </ul>
        );
    }
}

export default Work;
