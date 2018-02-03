import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h6
          style={{
            // ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 20,
            fontWeight: 900,
            textTransform: 'uppercase',
          }}
        >Hello, <span style={{ color: 'hsl(12, 100%, 50%)' }}>My name is James.
        I like to build useful things.</span>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {/* Link text can go here */}
          </Link>
        </h6>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: '-apple-system, sans-serif',
            marginTop: 20,
            marginBottom: rhythm(-1),
            marginBottom: rhythm(1),
          }}
        >
          <a className="logo" href="/">JT</a>
          {/* <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Gatsby Starter Blog
          </Link> */}
        </h3>
      )
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}
      </Container>
    )
  }
}

export default Template
