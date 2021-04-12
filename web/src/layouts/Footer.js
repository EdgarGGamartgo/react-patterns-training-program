import React from 'react'
import PropTypes from 'prop-types';

const Footer = ({ className, msg }) => {
    return (
        <div className={className}>
            <p>
                {
                    msg ? msg : 'netflixroulette'
                }
            </p>
        </div>            
    )
}

Footer.propTypes = {
    className: PropTypes.string.isRequired,
}

export  { Footer }
