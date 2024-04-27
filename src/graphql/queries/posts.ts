import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
  query GetPosts {
    posts(orderBy: publishedAt_DESC) {
      authors {
        name
      }
      title
      publishedAt
      post
      image {
        url
      }
    }
  }
`;
