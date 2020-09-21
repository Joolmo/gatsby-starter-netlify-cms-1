import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React, { memo, useCallback } from "react"

interface IContent {
    content: any,
    className?: string
}

export const HTMLContent = ({ content, className }: IContent) => (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

export const MDXContent = ({content, className}: IContent) => {
    const Wrapper = useCallback(
        ({children}: any) => {
            if (!!className) {
                return <div className={className}>{children}</div>
            } else {
                return <>{children}</>
            }
        },
        [className],
    )

    return <Wrapper>
        <MDXRenderer>{content}</MDXRenderer>
    </Wrapper>
}

const Content = ({ content, className }: IContent) => (
    <div className={className}>{content}</div>
)

export default Content
