
// Component to display notifications. Time limit in App()


import React, {} from 'react'

const Notifications = (props) => {

    if (props.message === '') {
        return null
    } else {
        return (
        <div className="alert alert-danger mt-5" role="alert">{props.message}</div>
        )
    }
}

export default Notifications

