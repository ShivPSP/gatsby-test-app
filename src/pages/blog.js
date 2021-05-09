import * as React from "react"
import { Link } from "gatsby"
import {graphql} from "gatsby"


const BlogPage = ({data}) => (
    <div>

        <h1>Latest Post</h1>
        {data.allMarkdownRemark.edges.map(item =>(
            <div key = {item.node.id}>
                <h3>{item.node.frontmatter.title}</h3>
                <small>Posted by {item.node.frontmatter.author} on {item.node.frontmatter.date}</small>
                <br/>
                <br/>
                <Link to={item.node.frontmatter.path}>Read More</Link>
                <br/>
                <br/>
                <hr/>
            </div>
        ))}

    </div>
)

export const pageQuery = graphql`
query BlogIndexQuery{

    allMarkdownRemark{

        edges
        {
      
        node
        {
            id
      
        frontmatter
        {
        path
        title
        author
        date
        }  
        }
        }
        }

}
`

export default BlogPage
