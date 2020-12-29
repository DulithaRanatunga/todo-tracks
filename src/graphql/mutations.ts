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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
  }
`;
