import React from 'react'

// Import typefaces
// import 'typeface-montserrat'
// import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                marginBottom: rhythm(2.5),
            }}
            >
                <img
                    src={profilePic}
                    alt={`James D. Toney`}
                    style={{
                        marginRight: rhythm(1 / 2),
                        marginBottom: 0,
                        width: rhythm(2),
                        height: rhythm(2),
                    }}
                />
                <small>
                    At the moment, I’m a senior programmer living and working in Fort Worth. To me, it is more about direction than perfection and consistency is key. Housed here is a random collection of my thoughts. {' '}
                    <a
                        className="highlight"
                        href="https://twitter.com/jamesdtoney"
                        target="_blank"
                    >I have been dormant as of late but you can follow me on Twitter
                    </a>.
                </small>
            </div>
        )
    }
}

export default Bio