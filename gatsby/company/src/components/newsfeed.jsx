import React from "react"
import { useStaticQuery,graphql } from "gatsby";
import News from "./news"

const Newsfeed = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark (sort: { fields:[frontmatter___date], order: DESC }, limit: 10) 
      {
        edges {
          node {
            id
            html
            frontmatter {
              title
              image {
                publicURL
              }
              date
            }
          }
        }
      }
    }  
    `)

  const newsItems = data.allMarkdownRemark.edges

  console.log(newsItems)
  return (
      <div>
        {
          newsItems.map( news => (
            <News key={news.node.id} title={news.node.frontmatter.title} date={news.node.frontmatter.date} image={news.node.frontmatter.image.publicURL}>
                {news.node.html}
            </News>
          ))
        }
      </div>
  )
}

export default Newsfeed;