import { API } from 'aws-amplify';
import { listGroupings, getGrouping, getTask } from '../graphql/queries';
import { Grouping, Task } from '../graphql/APITypes';
/** 
 * I've no idea what the right way of doing this in react is. 
 * But, the generated API code in graphql has a lot more mutations and queries
 * than which I actually want to use. Also it is messy with its graphql type casting.
 * 
 * This service wraps the actual queries and mutations I want to use in the product.
*/

const ApiService = {
    
    /**
     * Hydrated Task
     * @param id 
     */
    getTask: async function(id: string): Promise<Task> {   
        return new Promise(async (resolve) => {
            console.log(id);
            const apiData = await API.graphql({ query: getTask, variables: {id: id}}) as {
                data: { 
                    getTask: Task
                }
            }
            console.log(apiData);
            resolve(apiData.data.getTask);
        })
    },

    /** Hydrated grouping */
    getGrouping: async function(id: string): Promise<Grouping> {   
        return new Promise(async (resolve) => {
            console.log(id);
            const apiData = await API.graphql({ query: getGrouping, variables: {id: id}}) as {
                data: { 
                    getGrouping: Grouping
                }
            }
            console.log(apiData);
            resolve(apiData.data.getGrouping);
        })
    },

    /** Get all groupings for this user. (Unfiltered, unhydrated) */
    getGroupings: async function(): Promise<Grouping[]> {
        return new Promise(async (resolve) => {
            const apiData = await API.graphql({ query: listGroupings }) as {
            data: {
                listGroupings: {
                    items: Grouping[];
                }
            }}
            resolve(apiData.data.listGroupings.items);
        });        
    }
}


export default ApiService;