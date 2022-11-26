import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT; // Website storing data

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
            edges {
                node {
                author {
                    bio
                    name
                    id
                    photo {
                    url
                    }
                }
                createdAt
                slug
                title
                excerpt
                featuredImage {
                    url
                }
                categories {
                    name
                    slug
                }
                }
            }
            }
        }
      
    `

    const result = await request(graphqlAPI, query); // This is calling the query

    return result.postsConnection.edges;
};
// We have to pass the slug to get the specific post details (only one)
export const GetPostDetails = async (slug) => {
    const query = gql`
        query GetPostDetails($slug: String!) {
            post(where: {slug: $slug}) {
                author {
                    bio
                    name
                    id
                    photo {
                    url
                    }
                }
                createdAt
                slug
                title
                excerpt
                featuredImage {
                    url
                }
                categories {
                    name
                    slug
                }
                content {
                    raw
                }
            }
        }
        
      
    `

    const result = await request(graphqlAPI, query, { slug }); // This is calling the query with the current slug arg

    return result.post;
};

export const getCategoryPost = async (slug) => {
    const query = gql`
      query GetCategoryPost($slug: String!) {
        postsConnection(where: {categories_some: {slug: $slug}}) {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
    const query = gql`
    query MyQuery {
        posts(orderBy: createdAt_ASC, last: 3) {
          title
          featuredImage {
            url
          }
          slug
          createdAt
        }
      }
    `

    const result = await request(graphqlAPI, query); // This is calling the query

    return result.posts;
};

export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
        query GetPostDetails($slug: String!, $categories: [String!]) {
            posts(
                where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
                last: 3
            ) {
                title
                featuredImage {
                  url
                }
                slug
                createdAt
              }
        }
    `

    const result = await request(graphqlAPI, query, { categories, slug }); // This is calling the query

    return result.posts;
}

export const getCategories = async () => { // This is used to find all available categories
    const query = gql`
        query GetCategories {
            categories {
                name
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query); // This is calling the query

    return result.categories;
}