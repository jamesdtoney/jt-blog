import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'


import { rhythm, scale } from '../utils/typography'

class NotFoundPage extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')

        return (
            <div>
                <Helmet title={siteTitle} />
                <h1
                    style={{
                        fontWeight: 900,
                    }} >OOPS, PAGE NOT FOUND</h1>
                <p
                    style={{
                        ...scale(-1 / 5),
                        display: 'block',
                        marginBottom: rhythm(1),
                        marginTop: rhythm(-1),
                    }}
                >You just hit a route that doesn&#39;t exist... the humanity.</p>
                <a className='two' href="/">← Return Home</a>
            </div>
        )
    }
}

// const NotFoundPage = () => (
//   <div>
//     <h1>NOT FOUND</h1>
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//     <Link to="/">← Return Home</Link>
//   </div>
// )

export default NotFoundPage

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       html
//       frontmatter {
//         title
//         date(formatString: "DD MMM YYYY")
//       }
//     }
//   }
// `
