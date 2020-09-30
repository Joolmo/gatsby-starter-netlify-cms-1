import React from "react"
import { PageTemplate } from '../../templates/base-templates'

const PagePreview = ({ entry, widgetFor }: PreviewProps) => {
    return (
        <PageTemplate>
            {widgetFor("body")}
        </PageTemplate>
    )
}

export default PagePreview
