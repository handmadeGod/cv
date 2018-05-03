import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { theme1, theme2 } from '../theme/globalStyle'

import Header from '../components/header'
import './index.css'

class Layout extends React.Component {
  state = {
    apiUrl: 'https://cvjson.now.sh/',
    theme: theme1
  }
  render() {
    const { children, data } = this.props
    return (
      <ThemeProvider theme={this.state.theme}>
        <div>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' }
            ]}
          />
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0
            }}>
            {children()}
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
