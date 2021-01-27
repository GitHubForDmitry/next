import React from 'react';
import styles from '../styles/Layout.module.css'
import Nav from "./Nav";
import Header from "./Header";

function Layout({children}) {
    return (
        <>
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