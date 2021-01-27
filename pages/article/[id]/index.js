import React from 'react';
import {useRouter} from "next/router";
import Link from "next/link";

function article({article}) {
    const router = useRouter()
    const {id} = router.query;

    return (
        <div>
            <h1>id: {article.id}</h1>
            the title is: <br/>
            {article.title}
            the body: <br/>
            {article.body} <br/>

            <Link href='/'>go back</Link>
        </div>
    );
}

// export const getServerSideProps = async (context) => {
//     console.log(context.params.id);
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//
//     const article = await res.json();
//
//     return {
//         props: {
//             article
//         }
//     }
// }
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json();
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    const articles = await res.json();

    const ids = articles.map(article => article.id);

    const paths = ids.map(id => ({params: {id: id.toString()}}));
    return {
        paths,
        fallback: false
    }
}

export default article;