import Head from 'next/head'
import { FunctionComponent } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
    title: string
    isHeader: boolean
    isFooter: boolean
}

const Layout : FunctionComponent<Props> =({
    children,
    title,
    isHeader,
    isFooter,
})=> {
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="description" content="This is my portfoio site to description my skills" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap" rel="stylesheet"></link>
            </Head>
            {isHeader && (<Header/>)}
            {children}
            {isFooter && (<Footer/>)}
        </>
    )
}

export default Layout