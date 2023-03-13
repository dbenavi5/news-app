import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query
  const query = gql`
    query MyQuery(
        $access_key: String!,
        $categories: String!,
        $keywords: String
    ) {
        myQuery(
          access_key: $access_key
          categories: $categories
          countries: "us"
          sort: "published_desc"
          keywords: $keywords
        ) {
          data {
            author
            category
            country
            description
            image
            published_at
            source
            title
            url
            language
          }
          pagination {
            count
            limit
            offset
            total
          }
        }
      }`;

  // Fetch function with Next js 13 caching...
  const response = await fetch('https://cucersandevo.stepzen.net/api/edgy-hummingbird/__graphql', {
    method: 'POST',
    cache: isDynamic ? 'no-cache' : 'default',
    next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
    },
    body: JSON.stringify({
      query,
      variables: {
        access_key: process.env.MEDIASTACK_API_KEY,
        categories: category,
        keywords: keywords,
      }
    })
  });

  // console.log('LOADING NEW DATA FROM API for category>>>', category, keywords);

  const newsResponse = await response.json();

  // Sort function by image vs not images present
  const newsData = sortNewsByImage(newsResponse.data.myQuery)

  // return response
  return newsData;
};

export default fetchNews;

// "http://api.mediastack.com/v1/news?access_key=8ddeb9a84605089582a9c80cdb91ef74&countries=us%2Cgb&limit=100&offset=0&sort=published_desc"