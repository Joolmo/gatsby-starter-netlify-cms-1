import { BlogPostByIdQuery } from "types/graphql-types"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Content, { HTMLContent, MDXContent } from "../components/Content"
import { MDXProvider } from "@mdx-js/react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import React from "react"

interface BlogPostTemplateProps {
    content?: string | null
    contentComponent?: React.FC<any>
    description?: string | null
    tags?: (string | null)[] | null
    title?: string | null
    helmet?: React.ReactNode | null
}

export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    helmet
}) => {
    const PostContent = contentComponent || Content

    return (
        <section className="section">
            {helmet || ""}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {title}
                        </h1>
                        <p>{description}</p>
                        <PostContent content={content} />
                        {tags && tags.length ? (
                            <div style={{ marginTop: `4rem` }}>
                                <h4>Tags</h4>
                                <ul className="taglist">
                                    {tags.map(
                                        tag =>
                                            tag && (
                                                <li key={`tag${tag}`}>
                                                    <Link
                                                        to={`/tags/${kebabCase(
                                                            tag
                                                        )}/`}
                                                    >
                                                        {tag}
                                                    </Link>
                                                </li>
                                            )
                                    )}
                                </ul>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    )
}

const BlogPost: React.FC<{
    data: BlogPostByIdQuery
}> = ({ data }) => {
    const { mdx: post } = data
    const shortcodes = {}
    return (
        <MDXProvider components={shortcodes}>
            <Layout>
                <BlogPostTemplate
                    content={post?.body}
                    contentComponent={MDXContent}
                    description={post?.frontmatter?.description}
                    helmet={
                        <Helmet titleTemplate="%s | Blog">
                            <title>{`${post?.frontmatter?.title}`}</title>
                            <meta
                                name="description"
                                content={`${post?.frontmatter?.description}`}                            />
                        </Helmet>
                    }
                    tags={post?.frontmatter?.tags}
                    title={post?.frontmatter?.title}
                />
            </Layout>
        </MDXProvider>
    )
}

export default BlogPost

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        mdx(id: { eq: $id }) {
            id
            frontmatter {
                tags
                description
                title
                date
            }
            body
        }
    }
`
