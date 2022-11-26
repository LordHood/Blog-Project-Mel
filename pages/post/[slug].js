import React from 'react'
import { getPosts, GetPostDetails} from '../../services'
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Footer} from '../../components'

// post argument is given from getStaticProps which automatically gets the post details from the slug which is stored in post
const PostDetails = ({ post }) => {
  return (
    <div>
      <div className='container mx-auto px-10 mb-8'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
              <div className='col-span-1 lg:col-span-8'>
                  <PostDetail post={post}/>
                  <Author author={post.author}/>
                  {/* components for comments to be created and displayed... IDK if I actually want to code this
                  <CommentsForm slug={post.slug}/>
                  <Comments slug={post.slug}/>
                  */}
              </div>
              <div className='col-span-1 lg:col-span-4'>
                  <div className='relative lg:sticky top-8'>
                      <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
                      <Categories />
                  </div>
              </div>
          </div>
      </div>
      <Footer />
   </div> 
  )
}

export default PostDetails

 // Either we get the post results from the database or we just get an empty array if there is an error
 // params in this case is the slug
 export async function getStaticProps({ params }) {
    const data = await GetPostDetails(params.slug)
  
    return {
      props: { post: data }
    }
  }

  // This function is required to generate all the possible paths that are generated to use dynamic linking
  // ex: '/post/literature-review' ... '/post/...' all possible paths (Dynamic Linking)
  export async function getStaticPaths() {
    const posts = await getPosts();

    return {
        // For every post we have to destructure the node to get the slug
        // Then we specify the param to the slug
        paths: posts.map(({ node: { slug }}) => ({ params: { slug }})),
        fallback: false,
    }
  }