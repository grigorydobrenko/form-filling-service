import {instance, query} from "./httpService";

export const fetchOrganizationInfo = {
    getFieldsInfo: async () => {
        const {data} = await instance.post('', JSON.stringify({query: query}))
        console.log(data);

        // .catch(error => {
        //     console.log(error);
        // });
    }
}
