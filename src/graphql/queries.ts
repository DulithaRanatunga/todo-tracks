/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      objectID
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
        objectID
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
        items {
          id
          objectID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      blocks {
        items {
          id
          task
          blockedBy
          blockedByType
          createdAt
          updatedAt
        }
        nextToken
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
          nextToken
        }
        blocks {
          nextToken
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
      parent
      name
      next {
        id
        parent
        name
        next {
          id
          parent
          name
          status
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        hasBlockers {
          nextToken
        }
        blocks {
          nextToken
        }
        status
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          objectID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      hasBlockers {
        items {
          id
          task
          blockedBy
          blockedByType
          createdAt
          updatedAt
        }
        nextToken
      }
      blocks {
        items {
          id
          task
          blockedBy
          blockedByType
          createdAt
          updatedAt
        }
        nextToken
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
        parent
        name
        next {
          id
          parent
          name
          status
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        hasBlockers {
          nextToken
        }
        blocks {
          nextToken
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
      tasks {
        items {
          id
          parent
          name
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      parent {
        id
        name
        tasks {
          nextToken
        }
        parent {
          id
          name
          createdAt
          updatedAt
        }
        children {
          nextToken
        }
        createdAt
        updatedAt
      }
      children {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
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
        tasks {
          nextToken
        }
        parent {
          id
          name
          createdAt
          updatedAt
        }
        children {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
