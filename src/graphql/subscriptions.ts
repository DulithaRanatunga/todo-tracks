/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      objectID
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      objectID
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      objectID
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreateBlocker = /* GraphQL */ `
  subscription OnCreateBlocker {
    onCreateBlocker {
      id
      task
      blockedBy
      blockedByType
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlocker = /* GraphQL */ `
  subscription OnUpdateBlocker {
    onUpdateBlocker {
      id
      task
      blockedBy
      blockedByType
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlocker = /* GraphQL */ `
  subscription OnDeleteBlocker {
    onDeleteBlocker {
      id
      task
      blockedBy
      blockedByType
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGrouping = /* GraphQL */ `
  subscription OnCreateGrouping {
    onCreateGrouping {
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
export const onUpdateGrouping = /* GraphQL */ `
  subscription OnUpdateGrouping {
    onUpdateGrouping {
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
export const onDeleteGrouping = /* GraphQL */ `
  subscription OnDeleteGrouping {
    onDeleteGrouping {
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
