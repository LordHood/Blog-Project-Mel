import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug}) => {
  const [relatedPosts, setrelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) { // If the webpage slug exists, we need to set the relatedPosts to the result of getSimilarPosts()
      getSimilarPosts(categories, slug)
      .then((result) => setrelatedPosts(result))
    } else { // If the slug doesn't exists we just find the most recent posts instead from getRecentPosts()
      getRecentPosts()
      .then((result) => setrelatedPosts(result))
    }
  }, [slug]); // useEffect only changes when the slug changes

  console.log(relatedPosts);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'> 
          {slug ? 'Related Posts' : 'Recent Posts'}
        </h3>
        {relatedPosts.map((post) => (
          <div key={post.title} className='flex items-center w-full mb-4'>
            <div className='w-16 flex-none'>
              <img
                alt={post.title}
                height='60px'
                width='60px'
                className='align-middle rounded-full'
                src={post.featuredImage.url}  
                />

            </div>
            <div className='flex-grow ml-4' >
              <p className='text-gray-500 font-xs'>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
              <Link href={`/post/${post.slug}`} key={post.tile} className='text-md'>
                {post.title}
              </Link>
            </div>
          </div>
        ))}
    </div>
  )
}

export default PostWidget