import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const FooterStyled = styled.footer`
  margin: 0;
  margin-top: 4rem;

  padding: 2rem 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-size: .8rem;

  ul {
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin: 0;
    padding: 0;

    li {
      margin: 0 .5rem;

      a {
        text-decoration: none;

        &:hover {
          color: #B335F7;
          text-decoration: underline;
        }
      }
    }
  }
`

export default () => (
  <FooterStyled>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/privacy-policy">Privacy policy</Link>
      </li>
    </ul>
    <p>&copy; 3binco 2020</p>
  </FooterStyled>
)
