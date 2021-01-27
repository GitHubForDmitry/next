import React from 'react';
import styles from '../styles/Layout.module.css'
import Nav from "./Nav";
import Header from "./Header";
import Meta from "./Meta";

function Layout({children}) {
    return (
        <>
            <Meta />
            <Nav />
                <div className={styles.container}>
                    <div className={styles.main}>
                        <Header />
                        {children}
                    </div>
                </div>
        </>
    );
}

export default Layout;