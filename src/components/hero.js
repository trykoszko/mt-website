import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeroStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (min-width: 1024px) {
    padding-top: 100px;
    padding-bottom: 50px;
  }
`

const NameStyled = styled.h1`
  margin: 0;

  font-size: 2rem;
`

const TitleStyled = styled.p`
  margin: 0;

  font-size: 1.25rem;
  font-weight: 400;

  font-family: "Playfair Display", serif;
  font-weight: 400;
`

export default () => (
  <HeroStyled>
    <NameStyled><Link to="/">3binco</Link></NameStyled>
    <TitleStyled>A blog about web development &amp; IT lifestyle</TitleStyled>
  </HeroStyled>
)
