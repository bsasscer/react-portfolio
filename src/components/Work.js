import React from 'react';
import Entry from './Entry';
import entries from '../entries';


class Work extends React.Component {
    render() {
        return (
            <div className="entries">
                {Object.keys(entries).map(key => (
                    <Entry key={key} details={entries[key]} />
                ))}
            </div>
        );
    }
}

export default Work;
