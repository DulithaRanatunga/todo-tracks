/** 
 * Generates type definitions for my schema. 
 * From https://dev.to/applification/how-to-use-amplify-appsync-graphql-types-in-a-react-typescript-app-of
 * 
 * I don't know why Amplify doesn't automatically do this code gen for ts...
 */

import { DeepOmit } from './DeepOmit';
import {
    GetCommentQuery,
    GetEventQuery,
    GetGroupingQuery,
    GetTaskQuery,
} from './API';

export type Grouping = DeepOmit<Exclude<GetGroupingQuery['getGrouping'], null>,  '__typename'>;
export type Comment = DeepOmit<Exclude<GetCommentQuery['getComment'], null>,  '__typename'>;
export type Task = DeepOmit<Exclude<GetTaskQuery['getTask'], null>,  '__typename'>;
export type Event = DeepOmit<Exclude<GetEventQuery['getEvent'], null>,  '__typename'>;
