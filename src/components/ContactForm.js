import React from 'react';

class ContactForm extends React.Component {

    handleSubmit = event => {
        event.preventDefault()
        const value = event.target.elements.firstName.value;
        console.log(value);
    };

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name
                    <input
                        type="text"
                        name="firstName"
                    />
                </label>
                <label>
                    Last Name
                    <input
                        type="text"
                        name="lastName"
                    />
                </label>
                <label>
                    Email
                    <input
                        type="text"
                        name="email"
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default ContactForm;
