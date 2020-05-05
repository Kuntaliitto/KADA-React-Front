import { gql } from 'apollo-boost';

export const GET_FEATURED = gql`
    query GetNewsLiftups {
        news(liftup: true) {
        id
        title
        ingress
        body
        bodySummary
        imageUrl {
            small
            medium
            large
            full
        }
        imageTitle
        created
        changed
        }
    }
`;

export const GET_NEWSFEED = gql`
    query GetNews {
        news {
        id
        title
        ingress
        body
        bodySummary
        imageUrl {
            small
            medium
            large
            full
        }
        imageTitle
        created
        changed
        }
    }
`;