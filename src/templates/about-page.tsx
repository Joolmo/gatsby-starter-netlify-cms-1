import { AboutPageQuery, MarkdownRemark } from "types/graphql-types"
import { graphql } from "gatsby"
import Content, { HTMLContent, MDXContent } from "../components/Content"
import Layout from "../components/Layout"
import React from "react"

interface AboutPageTemplateProps {
    title?: string | null
    content?: string | null
    contentComponent?: React.FC<any>
}

export const AboutPageTemplate: React.FC<AboutPageTemplateProps> = ({
    title,
    content,
    contentComponent
}) => {
    const PageContent = contentComponent || Content

    return (
        <section className="section section--gradient">
            <div className="container">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {title}
                            </h2>
                            <PageContent
                                className="content"
                                content={content}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const AboutPage: React.FC<{data: AboutPageQuery}> = ({ data }) => {
    const { mdx: post } = data

    return (
        <Layout>
            <AboutPageTemplate
                contentComponent={MDXContent}
                title={post?.frontmatter?.title}
                content={post?.body}
            />
        </Layout>
    )
}

export default AboutPage

export const aboutPageQuery = graphql`
    query AboutPage($id: String!) {
        mdx(id: { eq: $id }) {
            body
            frontmatter {
                title
            }
        }
    }
`
