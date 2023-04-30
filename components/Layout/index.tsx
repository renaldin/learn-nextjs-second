import { ReactNode } from "react";
import Footer from "../Footer"
import Header from "../Header"
import styles from './Layout.module.css';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
};
const Layout = (props: LayoutProps) => {
    const { children, pageTitle } = props;

    return (
        <>
            <Head>
                <title>NextJS Basic | {pageTitle}</title>
                <meta name="description" content="Website NextJS Basic" />
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>{children}</div>
                <Footer />
            </div>
        </>
    )
}

export default Layout
