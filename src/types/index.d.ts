import { ReactNode } from 'react';

export * as GraphqlTypes from './graphql-types.d.ts'

export interface IMdxDefaultTemplateProps {
    path: string,
    children: JSX.Element,
    pathContext: {
        [key: string]: any,
        frontmatter: object
    }
}