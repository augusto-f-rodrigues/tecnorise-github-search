import { GraphQLClient, gql } from "graphql-request";

const endpoint = "https://api.github.com/graphql";
const gitHubAccessKey = process.env.NEXT_PUBLIC_GH_ACCESS_KEY;

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${gitHubAccessKey}`,
  },
});

const SEARCH_REPOSITORIES = gql`
  query searchRepositories($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            id
            name
            owner {
              login
            }
            stargazerCount
            url
          }
        }
      }
    }
  }
`;

export const searchRepositories = async (queryString: string) => {
  const variables = { queryString };
  const response: any = await client.request(SEARCH_REPOSITORIES, variables);
  return response.search.edges;
};
