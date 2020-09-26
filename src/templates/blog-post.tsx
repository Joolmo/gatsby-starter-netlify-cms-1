import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import { MDXProvider } from "@mdx-js/react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import React, { ReactNode } from "react"

interface BlogPostTemplateProps {
    children: ReactNode
    description?: string | null
    tags?: (string | null)[] | null
    title?: string | null
    helmet?: React.ReactNode | null
}

interface IBlogTemplateProps {
    children: ReactNode,
    path: string,
    pathContext: {
        frontmatter: {
            date: string
            description: string
            featuredimage: string
            featuredpost: boolean
            tags: string[]
            templateKey: string
            title: string
        }
    }
}


export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
    children,
    description,
    tags,
    title,
    helmet
}) => {
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
                        {children}
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

const BlogPost = ({ pathContext: {frontmatter}, children }: IBlogTemplateProps) => {
    const shortcodes = {
        Example: ({children}) => {
            console.log(children);
            return <></>
        }
    }

    return (
        <MDXProvider components={shortcodes}>
            <Layout>
                <BlogPostTemplate       
                    description={frontmatter?.description}
                    helmet={
                        <Helmet titleTemplate="%s | Blog">
                            <title>{`${frontmatter?.title}`}</title>
                            <meta
                                name="description"
                                content={`${frontmatter?.description}`}                            />
                        </Helmet>
                    }
                    tags={frontmatter?.tags}
                    title={frontmatter?.title}
                >
                    {children}
                </BlogPostTemplate>
            </Layout>
        </MDXProvider>
    ) 
}

export default BlogPost
