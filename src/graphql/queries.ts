import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
    query GetPosts {
        posts (orderBy: publishedAt_DESC){
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
`
export const GET_ALL_MATERIALS = gql `
    query GetMaterials {
        materials (orderBy: publishedAt_DESC){
            title
            category
            content {
                text
            }
            cover{
                url
            }
            author {
                name
                ministry
            }
        }
}
`