import React from 'react'

import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"
import uploadcare from "netlify-cms-media-library-uploadcare"
//@ts-ignore
import { MdxControl, setupPreview } from 'netlify-cms-widget-mdx';
import PagePreview from './preview-templates/PagePreview';

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate("page", PagePreview)

CMS.registerWidget("mdxEditor", MdxControl, setupPreview({scope: {
    Example: ({children}: any) => {
        console.log(children)
        return <></>
    }
}}))
