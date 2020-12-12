import React from 'react'
import Container from './container'
import Hero from './hero'
import Footer from './footer'
import GlobalStyle from './GlobalStyle'

class Template extends React.Component {
  render() {
    const { children, noBottomBar} = this.props

    return (
      <>
        <GlobalStyle noBottomBar={noBottomBar} />
        <Container>
          <Hero />
          {children}
        </Container>
        <Footer />
      </>
    )
  }
}

export default Template
