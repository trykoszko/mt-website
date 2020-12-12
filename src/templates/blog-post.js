import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import { Helmet } from 'react-helmet'
import styled, { css } from 'styled-components'
import get from 'lodash/get'
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon
} from 'react-share'

import Layout from '../components/layout'
import GoHomeBtn from '../components/gohomebtn'

const ArticleHeaderStyled = styled.header`
  margin-bottom: 2rem;
`

const ArticleMetaStyled = styled.div`
  margin: 0;
  padding: 20px 0;

  font-size: .8rem;

  border-top: 1px solid rgba(0, 0, 0, .2);
  border-bottom: 1px solid rgba(0, 0, 0, .2);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const ArticleTitleStyled = styled.h1`
  margin: 0;
  margin-bottom: .5rem;

  padding: 0;

  font-size: 3rem;
`

const ArticleMetaColStyled = styled.div`
  margin-right: 1rem;

  max-width: 50%;

  ${props => props.ml === 'auto' ? `margin-left: auto;` : ''}
  ${props => props.big ? css`
    font-size: .9rem;
    a {
      font-size: 1.25rem;
    }
  ` : css``}

  p {
    margin: 0;
  }
`

const AuthorImageStyled = styled(Image)`
  width: 45px;
  height: 45px;

  border-radius: 100%;

  ${props => props.big ? css`
    width: 100px;
    height: 100px;
  ` : css`
    width: 45px;
    height: 45px;
  `}
`

// const AuthorStyled = styled(Link)`
const AuthorStyled = styled.span`
  margin: 0;
  text-decoration: none;

  ${props => props.big ? css`
    font-weight: bold;
    font-size: 1.4rem;
  ` : ''}

  /* &:hover {
    text-decoration: underline;
  } */
`

const ArticleCatsWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;

  ul {
    margin-left: 1rem;
  }
`

const ArticleCatsStyled = styled.ul`
  list-style: none;

  margin: 0;
  margin-bottom: 1.5rem;

  padding: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  li {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`

const ArticleTagsWrapperStyled = styled.div`
  margin-top: 3rem;
`

const ArticleTagsStyled = styled(ArticleCatsStyled)`
  margin-top: .5rem;

  li {
    padding: .5rem .75rem;
    background: #f7f7f7;

    border-radius: 5px;

    color: grey;

    &:hover {
      color: black;
    }
  }
`

const ArticleSocials = styled.div`
  margin: 0;
  padding: 0;

  margin-left: auto;

  display: flex;
  flex-direction: column;

  div:nth-child(2) {
    margin-top: .25rem;
  }

  ${props => props.mb ? css`margin-bottom: 2rem;` : ''}

  button {
    &:not(:first-child) {
      margin-left: .35rem;
    }
  }
`

// const FooterNavStyled = styled.nav`
//   margin: 2rem 0 0 0;

//   ul {
//     list-style: none;

//     margin: 0;
//     padding: 0;

//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-between;
//   }
// `

const ArticleFooterStyled = styled.footer`
  margin-top: 3rem;
`

class BlogPostTemplate extends React.Component {
  render() {
    const siteTitle = `3binco - Web Development & IT Lifestyle Blog`
    const post = get(this.props, 'data.contentfulBlogPost')
    const author = post?.author
    const currentUrl = get(this.props, 'location.href')

    return (
      <Layout location={this.props.location}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <GoHomeBtn />
        <main>
          <article>
            <ArticleHeaderStyled>
              <ArticleTitleStyled>
                {post.title}
              </ArticleTitleStyled>
              {post.category && (
                <ArticleCatsWrapperStyled>
                  Categories:
                  <ArticleCatsStyled>
                    {post.category.map((cat, i) => <li key={i}><Link to={`/category/${cat.slug}`}>{cat.name}</Link></li>)}
                  </ArticleCatsStyled>
                </ArticleCatsWrapperStyled>
              )}
              <ArticleMetaStyled>
                <ArticleMetaColStyled>
                  {/* <Link to={`/author/${author.slug}`}> */}
                    <AuthorImageStyled
                      alt={`${author.name} Image`}
                      fluid={author.image.fluid}
                    />
                  {/* </Link> */}
                </ArticleMetaColStyled>
                <ArticleMetaColStyled>
                  <p>
                    Written on {post.publishDate}
                  </p>
                  <p>
                    by <AuthorStyled to={`/author/${author.slug}`}>{author.name}</AuthorStyled>
                  </p>
                </ArticleMetaColStyled>
                <ArticleMetaColStyled ml="auto">
                  <ArticleSocials>
                    <div>
                      <span>Share this article</span>
                    </div>
                    <div>
                      <FacebookShareButton url={currentUrl}>
                        <FacebookIcon size={32} />
                      </FacebookShareButton>
                      <FacebookMessengerShareButton url={currentUrl}>
                        <FacebookMessengerIcon size={32} />
                      </FacebookMessengerShareButton>
                      <TwitterShareButton url={currentUrl}>
                        <TwitterIcon size={32} />
                      </TwitterShareButton>
                      <LinkedinShareButton url={currentUrl}>
                        <LinkedinIcon size={32} />
                      </LinkedinShareButton>
                    </div>
                  </ArticleSocials>
                </ArticleMetaColStyled>
              </ArticleMetaStyled>
            </ArticleHeaderStyled>
            <main
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
            <ArticleFooterStyled>
              <ArticleSocials mb={true}>
                <div>
                  <FacebookShareButton url={currentUrl}>
                    <FacebookIcon size={32} />
                  </FacebookShareButton>
                  <FacebookMessengerShareButton url={currentUrl}>
                    <FacebookMessengerIcon size={32} />
                  </FacebookMessengerShareButton>
                  <TwitterShareButton url={currentUrl}>
                    <TwitterIcon size={32} />
                  </TwitterShareButton>
                  <LinkedinShareButton url={currentUrl}>
                    <LinkedinIcon size={32} />
                  </LinkedinShareButton>
                </div>
              </ArticleSocials>
              <ArticleMetaStyled>
                <ArticleMetaColStyled>
                  {/* <Link to={`/author/${author.slug}`}> */}
                    <AuthorImageStyled
                      alt={`${author.name} Image`}
                      fluid={author.image.fluid}
                      big={true}
                    />
                  {/* </Link> */}
                </ArticleMetaColStyled>
                <ArticleMetaColStyled big={true}>
                  <p>
                    <small>
                      Article author<br />
                    </small>
                    <AuthorStyled big={true} to={`/author/${author.slug}`}>{author.name}</AuthorStyled>
                  </p>
                  {author.title && (
                    <p>
                      {author.title}
                    </p>
                  )}
                </ArticleMetaColStyled>
                {/* <ArticleMetaColStyled ml="auto">
                  <a href={`mailto:${author.email}`}>
                    Email {author.name.split(' ')[0]}
                  </a>
                </ArticleMetaColStyled> */}
              </ArticleMetaStyled>
              {post.tags && (
                <ArticleTagsWrapperStyled>
                  Tags:
                  <ArticleTagsStyled>
                    {/* {post.tags.map((tag, i) => <li key={i}><Link to={`/tag/${tag}`}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</Link></li>)} */}
                    {post.tags.map((tag, i) => <li key={i}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</li>)}
                  </ArticleTagsStyled>
                </ArticleTagsWrapperStyled>
              )}
            </ArticleFooterStyled>
          </article>
        </main>
        {/* <FooterNavStyled>
          <ul>
            <li>Previous article: art</li>
            <li>Next article: art</li>
          </ul>
        </FooterNavStyled> */}
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        childMarkdownRemark {
          html
        }
      }
      tags
      category {
        name
        slug
      }
      author {
        name
        slug
        title
        email
        image {
          fluid(maxWidth: 100, maxHeight: 100, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
