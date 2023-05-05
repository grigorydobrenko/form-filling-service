import {fetchOrganizationInfo} from "../services/fetchOrganizationInfo";
import dateFormat from "dateformat";

export const getOrganizationFields = async (inn: string) => {

    const data = await fetchOrganizationInfo.getFieldsInfo(inn)

    const organizationData = data.suggestions[0].data

    let organizationFullName, organizationShortName, registrationDate, ogrn, formatedDate

    if (!data.suggestions || !data.suggestions.length || !data.suggestions[0].data) {
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

}