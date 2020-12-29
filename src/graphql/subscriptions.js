/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreateGrouping = /* GraphQL */ `
  subscription OnCreateGrouping {
    onCreateGrouping {
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
export const onUpdateGrouping = /* GraphQL */ `
  subscription OnUpdateGrouping {
    onUpdateGrouping {
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
export const onDeleteGrouping = /* GraphQL */ `
  subscription OnDeleteGrouping {
    onDeleteGrouping {
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
