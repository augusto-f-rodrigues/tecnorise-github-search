import {
  GET_REPOSITORY_DETAILS_QUERY,
  SEARCH_REPOSITORIES_QUERY,
} from '@/graphql/repository.query';
import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://api.github.com/graphql';
const gitHubAccessKey = process.env.NEXT_PUBLIC_GH_ACCESS_KEY;

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${gitHubAccessKey}`,
  },
});

export const searchRepositories = async (queryString: string) => {
  const variables = { queryString };
  const response: any = await client.request(
    SEARCH_REPOSITORIES_QUERY,
    variables,
  );
  return response.search.edges;
};

export const getRepositoryDetails = async (queryString: {
  owner: string;
  name: string;
}) => {
  const response: any = await client.request(
    GET_REPOSITORY_DETAILS_QUERY,
    queryString,
  );
  return response.repository;
};
