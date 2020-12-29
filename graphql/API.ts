/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCommentInput = {
  id?: string | null,
  content: string,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateCommentInput = {
  content?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type CreateEventInput = {
  id?: string | null,
  name: string,
  trigger?: string | null,
  done: boolean,
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null,
  trigger?: ModelStringInput | null,
  done?: ModelBooleanInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateEventInput = {
  id: string,
  name?: string | null,
  trigger?: string | null,
  done?: boolean | null,
};

export type DeleteEventInput = {
  id?: string | null,
};

export type CreateTaskInput = {
  id?: string | null,
  name: string,
  status: Status,
};

export enum Status {
  BLANK = "BLANK",
  IN_PROGRESS = "IN_PROGRESS",
  BLOCKED = "BLOCKED",
  DONE = "DONE",
  SKIPPED = "SKIPPED",
}


export type ModelTaskConditionInput = {
  name?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type UpdateTaskInput = {
  id: string,
  name?: string | null,
  status?: Status | null,
};

export type DeleteTaskInput = {
  id?: string | null,
};

export type CreateGroupingInput = {
  id?: string | null,
  name: string,
};

export type ModelGroupingConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelGroupingConditionInput | null > | null,
  or?: Array< ModelGroupingConditionInput | null > | null,
  not?: ModelGroupingConditionInput | null,
};

export type UpdateGroupingInput = {
  id: string,
  name?: string | null,
};

export type DeleteGroupingInput = {
  id?: string | null,
};

export type ModelCommentFilterInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  trigger?: ModelStringInput | null,
  done?: ModelBooleanInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
};

export type ModelGroupingFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelGroupingFilterInput | null > | null,
  or?: Array< ModelGroupingFilterInput | null > | null,
  not?: ModelGroupingFilterInput | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent:  {
    __typename: "Event",
    id: string,
    name: string,
    trigger: string | null,
    done: boolean,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent:  {
    __typename: "Event",
    id: string,
    name: string,
    trigger: string | null,
    done: boolean,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent:  {
    __typename: "Event",
    id: string,
    name: string,
    trigger: string | null,
    done: boolean,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask:  {
    __typename: "Task",
    id: string,
    name: string,
    next:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null >,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    blocker:  Array<( {
        __typename: "Task",
        id: string,
        name: string,
        status: Status,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "Event",
        id: string,
        name: string,
        trigger: string | null,
        done: boolean,
        createdAt: string,
        updatedAt: string,
      }
    ) | null >,
    parents:  Array< {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask:  {
    __typename: "Task",
    id: string,
    name: string,
    next:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null >,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    blocker:  Array<( {
        __typename: "Task",
        id: string,
        name: string,
        status: Status,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "Event",
        id: string,
        name: string,
        trigger: string | null,
        done: boolean,
        createdAt: string,
        updatedAt: string,
      }
    ) | null >,
    parents:  Array< {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask:  {
    __typename: "Task",
    id: string,
    name: string,
    next:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null >,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    blocker:  Array<( {
        __typename: "Task",
        id: string,
        name: string,
        status: Status,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "Event",
        id: string,
        name: string,
        trigger: string | null,
        done: boolean,
        createdAt: string,
        updatedAt: string,
      }
    ) | null >,
    parents:  Array< {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupingMutationVariables = {
  input: CreateGroupingInput,
  condition?: ModelGroupingConditionInput | null,
};

export type CreateGroupingMutation = {
  createGrouping:  {
    __typename: "Grouping",
    id: string,
    name: string,
    todos:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null >,
    children:  Array< {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    parent:  {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupingMutationVariables = {
  input: UpdateGroupingInput,
  condition?: ModelGroupingConditionInput | null,
};

export type UpdateGroupingMutation = {
  updateGrouping:  {
    __typename: "Grouping",
    id: string,
    name: string,
    todos:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null >,
    children:  Array< {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    parent:  {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupingMutationVariables = {
  input: DeleteGroupingInput,
  condition?: ModelGroupingConditionInput | null,
};

export type DeleteGroupingMutation = {
  deleteGrouping:  {
    __typename: "Grouping",
    id: string,
    name: string,
    todos:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null >,
    children:  Array< {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    parent:  {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comment",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent:  {
    __typename: "Event",
    id: string,
    name: string,
    trigger: string | null,
    done: boolean,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      name: string,
      trigger: string | null,
      done: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask:  {
    __typename: "Task",
    id: string,
    name: string,
    next:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null >,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    blocker:  Array<( {
        __typename: "Task",
        id: string,
        name: string,
        status: Status,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "Event",
        id: string,
        name: string,
        trigger: string | null,
        done: boolean,
        createdAt: string,
        updatedAt: string,
      }
    ) | null >,
    parents:  Array< {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGroupingQueryVariables = {
  id: string,
};

export type GetGroupingQuery = {
  getGrouping:  {
    __typename: "Grouping",
    id: string,
    name: string,
    todos:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null >,
    children:  Array< {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    parent:  {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupingsQueryVariables = {
  filter?: ModelGroupingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupingsQuery = {
  listGroupings:  {
    __typename: "ModelGroupingConnection",
    items:  Array< {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment:  {
    __typename: "Comment",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment:  {
    __typename: "Comment",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment:  {
    __typename: "Comment",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent:  {
    __typename: "Event",
    id: string,
    name: string,
    trigger: string | null,
    done: boolean,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent:  {
    __typename: "Event",
    id: string,
    name: string,
    trigger: string | null,
    done: boolean,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent:  {
    __typename: "Event",
    id: string,
    name: string,
    trigger: string | null,
    done: boolean,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask:  {
    __typename: "Task",
    id: string,
    name: string,
    next:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null >,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    blocker:  Array<( {
        __typename: "Task",
        id: string,
        name: string,
        status: Status,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "Event",
        id: string,
        name: string,
        trigger: string | null,
        done: boolean,
        createdAt: string,
        updatedAt: string,
      }
    ) | null >,
    parents:  Array< {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask:  {
    __typename: "Task",
    id: string,
    name: string,
    next:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null >,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    blocker:  Array<( {
        __typename: "Task",
        id: string,
        name: string,
        status: Status,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "Event",
        id: string,
        name: string,
        trigger: string | null,
        done: boolean,
        createdAt: string,
        updatedAt: string,
      }
    ) | null >,
    parents:  Array< {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask:  {
    __typename: "Task",
    id: string,
    name: string,
    next:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null >,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    blocker:  Array<( {
        __typename: "Task",
        id: string,
        name: string,
        status: Status,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "Event",
        id: string,
        name: string,
        trigger: string | null,
        done: boolean,
        createdAt: string,
        updatedAt: string,
      }
    ) | null >,
    parents:  Array< {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupingSubscription = {
  onCreateGrouping:  {
    __typename: "Grouping",
    id: string,
    name: string,
    todos:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null >,
    children:  Array< {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    parent:  {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupingSubscription = {
  onUpdateGrouping:  {
    __typename: "Grouping",
    id: string,
    name: string,
    todos:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null >,
    children:  Array< {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    parent:  {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupingSubscription = {
  onDeleteGrouping:  {
    __typename: "Grouping",
    id: string,
    name: string,
    todos:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null >,
    children:  Array< {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    parent:  {
      __typename: "Grouping",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
