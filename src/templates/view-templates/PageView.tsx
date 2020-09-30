import { MDXProvider } from '@mdx-js/react';
import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import Layout from "../../components/layout/Layout"
import { IMdxDefaultTemplateProps } from 'src/types';
import { PageTemplate } from '../base-templates';

interface IBlogViewTemplateProps extends IMdxDefaultTemplateProps{
    pathContext: {
        frontmatter: {
            templateKey: string
        }
    }
}

const PageView = ({ pathContext: {frontmatter}, children }: IBlogViewTemplateProps) => {
    const shortcodes = {
        Example: ({children}: any) => {
            console.log(children);
            return <></>
        }
    }

    return (
        <MDXProvider components={shortcodes}>
            <Layout>
                <PageTemplate>
                    {children}
                </PageTemplate>
            </Layout>
        </MDXProvider>
    ) 
}

export default PageView