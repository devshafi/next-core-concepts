import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList';
import { server } from '../config';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Next Crash course</title>
        <meta name='keywords' content='next, react'></meta>
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

// get data from third party api
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json();
//   return {
//     props: {
//       articles
//     }
//   }
// }


// get data from api
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}
