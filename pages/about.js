import React from 'react';
import Head from "next/head";

function About(props) {
    return (
        <div>
            <Head>
                <title>About this page</title>
                <meta name='meta about' content='about' />
            </Head>
            <h1>About</h1>
        </div>
    );
}

export default About;