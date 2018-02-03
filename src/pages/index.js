import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import styles from '../css/index.css'
console.log(styles);

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <a className="three" style={{
              marginBottom: rhythm(2),
            }} href={node.fields.slug}>
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  fontWeight: 900,
                  textTransform: 'uppercase',
                }}
              >
                  <span style={{ boxShadow: '' }} href={node.fields.slug}>
                  {title}
                </span>
              </h3>
              <small style={{
                textTransform: 'uppercase',
                letterSpacing: '.2rem'
              }} >{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            </a>
          )
        })}
        <p style={{ color: 'black' }} >👋🏾</p>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMM YYYY")
            title
          }
        }
      }
    }
  }
`
