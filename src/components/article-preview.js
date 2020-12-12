import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ArticleStyled = styled.article``

const TitleStyled = styled.h3`
  font-size: 2.2rem;

  margin: 0;
  margin-bottom: 10px;
`

const MetaStyled = styled.small`
  margin: 0;
  margin-bottom: 10px;
`

const AuthorStyled = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const ArticleCatsWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;

  font-size: .8rem;
`

const ArticleCatsStyled = styled.ul`
  list-style: none;

  margin: 0;
  margin-bottom: .25rem;
  padding: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  & > li {
    margin: 0;
    padding: 0;

    &:not(:last-child) {
      margin-right: .5rem;
    }
  }
`

export default ({ article }) => (
  <ArticleStyled>
    <TitleStyled>
      <Link to={`/${article.slug}-${article.contentful_id}`}>{article.title}</Link>
    </TitleStyled>
    <MetaStyled>{article.publishDate} | <AuthorStyled to={`/author/${article.author.slug}`}>{article.author.name}</AuthorStyled></MetaStyled>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
      />
    {article.category && (
      <ArticleCatsWrapperStyled>
        <ArticleCatsStyled>
          {article.category.map((cat, i) => <li key={i}><Link to={`/category/${cat.slug}`}>{cat.name}</Link></li>)}
        </ArticleCatsStyled>
      </ArticleCatsWrapperStyled>
    )}
  </ArticleStyled>
)
