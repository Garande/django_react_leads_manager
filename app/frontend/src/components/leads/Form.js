import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addLead } from '../../store/actions/leads';
import PropTypes from 'prop-types'

class Form extends Component {
    static propsTypes = {
        addLead: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            contact: '',
            location: '',
        }
    }

    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        });
    }


    onSubmit = (e) => {
        e.preventDefault();
        ;

        const { name, email, contact, location, message } = this.state;
        const lead = { name, email, contact, location, message };

        this.props.addLead(lead);

    }

    render() {
        let { name, email, message, contact, location } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" type="text" name="name" onChange={this.onChange}
                            value={name} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" name="email" onChange={this.onChange}
                            value={email} />
                    </div>
                    <div className="form-group">
                        <label>Contact</label>
                        <input className="form-control" type="number" name="contact" onChange={this.onChange}
                            value={contact} />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input className="form-control" type="text" name="location" onChange={this.onChange}
                            value={location} />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" type="text" name="message" onChange={this.onChange}
                            value={message} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}




export default connect(null, { addLead })(Form);