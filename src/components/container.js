import React from 'react'
import styled from 'styled-components'

const ContainerStyled = styled.div`
  max-width: 900px;

  margin: 0 20px;
  padding-left: 20px;
  padding-right: 20px;

  background: white;
`

export default ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
)
