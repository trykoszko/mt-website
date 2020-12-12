import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

const MainStyled = styled.main`

`

const TitleStyled = styled.h2`
  font-weight: 400;
`

const PostListStyled = styled.ul`
  list-style: none;

  margin: 0;
  padding: 0;

  & > li {
    margin-bottom: 3rem;
    padding-bottom: 2rem;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, .1);
    }
  }
`

class RootIndex extends React.Component {
  render() {
    const siteTitle = `3binco - Web Development & IT Lifestyle Blog`
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <MainStyled>
          <TitleStyled>Recent articles</TitleStyled>
          <PostListStyled>
            {posts?.map(({ node }) => <li key={node.slug}><ArticlePreview article={node} /></li>)}
          </PostListStyled>
        </MainStyled>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          author {
            name
            slug
          }
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          contentful_id
          tags
          description {
            childMarkdownRemark {
              html
            }
          }
          category {
            name
            slug
          }
        }
      }
    }
  }
`
