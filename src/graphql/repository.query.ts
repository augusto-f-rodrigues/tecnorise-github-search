import { gql } from 'graphql-request';

export const SEARCH_REPOSITORIES_QUERY = gql`
  query searchRepositories($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 50) {
      edges {
        node {
          ... on Repository {
            id
            name
            owner {
              login
              avatarUrl
            }
            stargazerCount
            url
            primaryLanguage {
              color
              name
            }
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORY_DETAILS_QUERY = gql`
  query GetRepositoryInfo($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      name
      description
      createdAt
      updatedAt
      url
      owner {
        login
        avatarUrl
      }
      primaryLanguage {
        name
        color
      }
      stargazers {
        totalCount
      }
      forks {
        totalCount
      }
      defaultBranchRef {
        target {
          ... on Commit {
            tree {
              entries {
                name
                object {
                  ... on Blob {
                    text
                  }
                }
              }
            }
            history {
              totalCount
            }
          }
        }
      }
      issues(states: OPEN) {
        totalCount
      }
      pullRequests(states: OPEN) {
        totalCount
      }
    }
  }
`;
