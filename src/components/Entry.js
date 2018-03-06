import React from 'react';


class Entry extends React.Component {
    render() {
        const { company, title, image, desc } = this.props.details;
        return (
            <li>
                <div className="entry-img">
                    <img src={image} alt={title} />
                </div>
                <div className="entry-copy">
                    <h3>
                        {company}
                    </h3>
                    <h2>
                        {title}
                    </h2>
                    <p>{desc}</p>
                    <button>See Case Study</button>
                </div>
            </li>
        );
    }
}

export default Entry;
