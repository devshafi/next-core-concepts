
import Link from 'next/link';
import { useRouter } from 'next/router';
import { server } from '../../../config';


export default function Article({ article }) {

    const router = useRouter();
    const { id } = router.query;

    return (
        <div>

            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>

        </div>
    )
}

// send request each time page load
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();
//     return {
//         props: {
//             article
//         }
//     }
// }

// generate path for each articles statically
export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`);
    const articles = await res.json();
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))
    return {
        paths,
        fallback: false // go 404 if not happened
    }
}


// generate page based on path info
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`);
    const article = await res.json();
    return {
        props: {
            article
        }
    }
}


