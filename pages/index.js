import Head from 'next/head';
import { PostCard, Categories, PostWidget, Footer } from '../components'
import { getPosts } from '../services'

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

// This demonstrates a way of creating data in code. Before backend is finished
/*
const posts = [
  {title: 'React Testing', excerpt: 'Learn React Testing'},
  {title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'},
];,
*/

// The posts is comming from the getStaticProps which generates all the posts from the database
export default function Home({ posts}) {
  return (
    <div>
      <div className="container mx-auto px-10 mb-8">
          <Head>
            <title>Mel's Blog</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
              <div className="lg:col-span-8 col-span-1">
                {posts.map((post) => (<PostCard post={post.node} key={post.title} /> ))}
              </div>
              <div className="lg:col-span-4 col-span-1">
                <div className="lg:sticky relative top-8">
                  <PostWidget />
                  <Categories />
                </div>
              </div>
            </div>

        
      </div>
      <Footer />
    </div>
  )
}
 // Either we get the post results from the database or we just get an empty array if there is an error
 export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}