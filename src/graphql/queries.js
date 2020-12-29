/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      trigger
      done
      comments {
        id
        content
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        trigger
        done
        comments {
          id
          content
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      name
      next {
        id
        name
        next {
          id
          name
          status
          createdAt
          updatedAt
        }
        comments {
          id
          content
          createdAt
          updatedAt
        }
        blocker {
          ... on Task {
            id
            name
            status
            createdAt
            updatedAt
          }
          ... on Event {
            id
            name
            trigger
            done
            createdAt
            updatedAt
          }
        }
        parents {
          id
          name
          createdAt
          updatedAt
        }
        status
        createdAt
        updatedAt
      }
      comments {
        id
        content
        createdAt
        updatedAt
      }
      blocker {
        ... on Task {
          id
          name
          next {
            id
            name
            status
            createdAt
            updatedAt
          }
          comments {
            id
            content
            createdAt
            updatedAt
          }
          blocker {
            ... on Task {
              id
              name
              status
              createdAt
              updatedAt
            }
            ... on Event {
              id
              name
              trigger
              done
              createdAt
              updatedAt
            }
          }
          parents {
            id
            name
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
        ... on Event {
          id
          name
          trigger
          done
          comments {
            id
            content
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }
      parents {
        id
        name
        todos {
          id
          name
          status
          createdAt
          updatedAt
        }
        children {
          id
          name
          createdAt
          updatedAt
        }
        parent {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        next {
          id
          name
          status
          createdAt
          updatedAt
        }
        comments {
          id
          content
          createdAt
          updatedAt
        }
        blocker {
          ... on Task {
            id
            name
            status
            createdAt
            updatedAt
          }
          ... on Event {
            id
            name
            trigger
            done
            createdAt
            updatedAt
          }
        }
        parents {
          id
          name
          createdAt
          updatedAt
        }
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGrouping = /* GraphQL */ `
  query GetGrouping($id: ID!) {
    getGrouping(id: $id) {
      id
      name
      todos {
        id
        name
        next {
          id
          name
          status
          createdAt
          updatedAt
        }
        comments {
          id
          content
          createdAt
          updatedAt
        }
        blocker {
          ... on Task {
            id
            name
            status
            createdAt
            updatedAt
          }
          ... on Event {
            id
            name
            trigger
            done
            createdAt
            updatedAt
          }
        }
        parents {
          id
          name
          createdAt
          updatedAt
        }
        status
        createdAt
        updatedAt
      }
      children {
        id
        name
        todos {
          id
          name
          status
          createdAt
          updatedAt
        }
        children {
          id
          name
          createdAt
          updatedAt
        }
        parent {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      parent {
        id
        name
        todos {
          id
          name
          status
          createdAt
          updatedAt
        }
        children {
          id
          name
          createdAt
          updatedAt
        }
        parent {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGroupings = /* GraphQL */ `
  query ListGroupings(
    $filter: ModelGroupingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        todos {
          id
          name
          status
          createdAt
          updatedAt
        }
        children {
          id
          name
          createdAt
          updatedAt
        }
        parent {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
