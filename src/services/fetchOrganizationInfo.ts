import {instance} from "./httpService";

export const fetchOrganizationInfo = {
    getFieldsInfo: async (query: string) => {
        const {data} = await instance.post('',{query})
        return data

    }
}
