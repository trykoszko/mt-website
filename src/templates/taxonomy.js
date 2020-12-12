import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import GoHomeBtn from '../components/gohomebtn'

const MainStyled = styled.main``

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

class TaxonomyTemplate extends React.Component {
  render() {
    const catName = get(this.props, 'data.contentfulCategory.name')
    const posts = get(this.props, 'data.contentfulCategory.blog_post')
    const siteTitle = `Category: ${catName} | 3binco - Web Development & IT Lifestyle Blog`

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <GoHomeBtn text="Show all articles" />
        <MainStyled>
          <TitleStyled>Articles from category: {catName}</TitleStyled>
          <PostListStyled>
            {posts?.map(post => <li key={post.slug}><ArticlePreview article={post} /></li>)}
          </PostListStyled>
        </MainStyled>
      </Layout>
    )
  }
}

export default TaxonomyTemplate

export const pageQuery = graphql`
  query CategoryBySlug($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      name
      blog_post {
        author {
          name
          slug
        }
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
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
`
