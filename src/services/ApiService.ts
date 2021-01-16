import { API } from 'aws-amplify';
import { listGroupings, getGrouping, getTask, listEvents, getEvent } from '../graphql/queries';
import { createGrouping } from '../graphql/mutations';
import { Event, Grouping, Task } from '../graphql/APITypes';
/** 
 * I've no idea what the right way of doing this in react is. 
 * But, the generated API code in graphql has a lot more mutations and queries
 * than which I actually want to use. Also it is messy with its graphql type casting.
 * 
 * This service wraps the actual queries and mutations I want to use in the product.
*/

const performListQuery = function(query: any, queryName: string): Promise<any> {
    return new Promise(async (resolve) => {
        const apiData: any = await API.graphql({ query: query });        
        resolve(apiData.data[queryName].items);
    });        
}

const performHydrationQuery = function(query: any, queryName: string, id: string): Promise<any> {    
    return new Promise(async (resolve) => {
        const apiData: any = await API.graphql({ query: query, variables: {id: id}});
        resolve(apiData.data[queryName]);
    })
}

const performMutation = function(query: any, queryName: string, variables: any): Promise<any> {
    return new Promise(async (resolve) => {
        const apiData: any = await API.graphql({ query: query, variables: { input: variables }});
        resolve(apiData.data[queryName]);
    })
}

const ApiService = {

    /** Creates a grouping */
    createGrouping: async function(name: string, parent?: Grouping): Promise<Grouping> {
        return performMutation(createGrouping, 'createGrouping',{ name: name, groupingParentId: parent?.id} );
    },


    getEvent: async function(id: string): Promise<Event> {
        return performHydrationQuery(getEvent, 'getEvent', id);
    },

    getEvents: async function(): Promise<Event[]> {
        return performListQuery(listEvents, 'listEvents');    
    },
    
    /**
     * Hydrated Task
     * @param id 
     */
    getTask: async function(id: string): Promise<Task> {   
        return performHydrationQuery(getTask, 'getTask', id);
    },

    /** Hydrated grouping */
    getGrouping: async function(id: string): Promise<Grouping> {   
        return performHydrationQuery(getGrouping, 'getGrouping', id);
    },

    /** Get all groupings for this user. (Unfiltered, unhydrated) */
    getGroupings: async function(): Promise<Grouping[]> {
        return performListQuery(listGroupings, 'listGroupings');
    }
}


export default ApiService;