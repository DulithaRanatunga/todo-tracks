/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      objectID
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      objectID
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      objectID
      content
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createBlocker = /* GraphQL */ `
  mutation CreateBlocker(
    $input: CreateBlockerInput!
    $condition: ModelBlockerConditionInput
  ) {
    createBlocker(input: $input, condition: $condition) {
      id
      task
      blockedBy
      blockedByType
      createdAt
      updatedAt
    }
  }
`;
export const updateBlocker = /* GraphQL */ `
  mutation UpdateBlocker(
    $input: UpdateBlockerInput!
    $condition: ModelBlockerConditionInput
  ) {
    updateBlocker(input: $input, condition: $condition) {
      id
      task
      blockedBy
      blockedByType
      createdAt
      updatedAt
    }
  }
`;
export const deleteBlocker = /* GraphQL */ `
  mutation DeleteBlocker(
    $input: DeleteBlockerInput!
    $condition: ModelBlockerConditionInput
  ) {
    deleteBlocker(input: $input, condition: $condition) {
      id
      task
      blockedBy
      blockedByType
      createdAt
      updatedAt
    }
  }
`;
export const createGrouping = /* GraphQL */ `
  mutation CreateGrouping(
    $input: CreateGroupingInput!
    $condition: ModelGroupingConditionInput
  ) {
    createGrouping(input: $input, condition: $condition) {
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
export const updateGrouping = /* GraphQL */ `
  mutation UpdateGrouping(
    $input: UpdateGroupingInput!
    $condition: ModelGroupingConditionInput
  ) {
    updateGrouping(input: $input, condition: $condition) {
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
export const deleteGrouping = /* GraphQL */ `
  mutation DeleteGrouping(
    $input: DeleteGroupingInput!
    $condition: ModelGroupingConditionInput
  ) {
    deleteGrouping(input: $input, condition: $condition) {
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
