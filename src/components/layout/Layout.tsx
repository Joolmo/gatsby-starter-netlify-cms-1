import React, { ReactNode } from 'react'
import { Header } from "../index";
import './Layout.scss'

interface ILayoutProps {
    children: ReactNode
}

const Layout = ({children}: ILayoutProps) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}

export default Layout