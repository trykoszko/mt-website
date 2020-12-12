import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import GoHomeBtn from '../components/gohomebtn'


const MainStyled = styled.main`

`

class FourOhFour extends React.Component {
  render() {
    const siteTitle = `Error | 3binco - Web Development & IT Lifestyle Blog`

    return (
      <Layout location={this.props.location} noBottomBar={true}>
        <Helmet title={404} />
        <GoHomeBtn />
        <MainStyled>
          <h1>Error 404</h1>
          <p>The page you're looking for doesn't exist.</p>
          <Link to="/">
            &laquo; Go back to Homepage
          </Link>
        </MainStyled>
      </Layout>
    )
  }
}

export default FourOhFour
