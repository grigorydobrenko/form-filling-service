import {fetchOrganizationInfo} from "../services/fetchOrganizationInfo";
import dateFormat from "dateformat";

export const getOrganizationFields = async (inn: string) => {

    const data = await fetchOrganizationInfo.getFieldsInfo(inn)

    const organizationData = data.suggestions[0].data

    let organizationFullName, organizationShortName, registrationDate, ogrn, formatedDate

    if (!data.suggestions || !data.suggestions.length || !data.suggestions[0].data) {
        // Return an empty object or throw an error here if the response is not as expected
        return {organizationFullName, organizationShortName, formatedDate, ogrn};
    }

    organizationFullName = organizationData.name.full_with_opf
    organizationShortName = organizationData.name.short
    registrationDate = organizationData.state.registration_date
    formatedDate = dateFormat(registrationDate, 'dd.mm.yyyy')
    ogrn = organizationData.ogrn

    return {
        organizationFullName,
        organizationShortName,
        formatedDate,
        ogrn
    }

    // const data = await fetchOrganizationInfo.getFieldsInfo(inn)
    //
    // const organizationData = data.suggestions[0].data
    //
    // const organizationFullName = organizationData.name.full_with_opf
    // const organizationShortName = organizationData.name.short
    // const registrationDate = organizationData.state.registration_date
    // const formatedDate = dateFormat(registrationDate, 'dd.mm.yyyy')
    // const ogrn = organizationData.ogrn
    //
    // return {
    //     organizationFullName,
    //     organizationShortName,
    //     formatedDate,
    //     ogrn
    // }
}