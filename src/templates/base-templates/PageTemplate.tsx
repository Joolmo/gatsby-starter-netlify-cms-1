import { Link } from "gatsby"
import { kebabCase } from "lodash"
import React, { ReactNode } from "react"

interface IPageTemplateProps {
    children: JSX.Element
}

const PageTemplate = ({children}: IPageTemplateProps) => {
    return children
}

export default PageTemplate