import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
    }

    componentDidUpdate(prevProps) {
        // this.props.alert.show('It works');
        const { error, alert } = this.props;
        if (error !== prevProps.error) {
            // alert.error('There is an error')
            if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
            if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
            if (error.msg.contact) alert.error(`Contact: ${error.msg.contact.join()}`);
            if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);
            if (error.msg.location) alert.error(`Location: ${error.msg.location.join()}`);
        }
    }

    render() {
        return <Fragment />
    }
}

const mapStateToProps = state => ({
    error: state.errors
})

export default connect(mapStateToProps)(withAlert()(Alerts));


// export default withAlert(Alerts)