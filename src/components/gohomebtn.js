import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const BtnStyled = styled(Link)`
  position: absolute;
  top: 40px;
  left: 40px;
`

export default ({ text }) => <BtnStyled to="/">&laquo; {text ? text : `Go back to Homepage`}</BtnStyled>
