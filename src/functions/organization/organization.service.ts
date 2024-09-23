
import { User } from "@libs/dbmodels/user.model";
import { GetItem, OrgCreate, UserCreate } from "./interface";
import { Organization } from "@libs/dbmodels/organization.model";
import { paginationDecode } from "@libs/api-gateway";
import { Organization_Sk, SK_CREATED_AT_INDEX } from "@constants/constants";
import { IQuery } from "@libs/interfaces/get-item.interface";
import { getByIndex } from "@libs/helpers/dynamodb.helper";


export const createOrganizationDetails = async (obj: OrgCreate) => {
    return await Organization.put(obj, {
        strictSchemaCheck: true
    });
}
export const getOrganization = async (params: GetItem) => {
    return await Organization.get({ PK: params.PK, SK: params.SK })
}

export const deleteOrganization = async (params: GetItem) => {
    return await Organization.delete({ PK: params.PK, SK: params.SK })
}
export const createUser = async (obj: UserCreate) => {
    return await User.put(obj, {
        strictSchemaCheck: true
    });
}
export const updateOrganizationDetails = async (obj: OrgCreate) => {
    return await Organization.put(obj, {
        strictSchemaCheck: true
    });
}
export const getAllOrganization = async (pagination?: string, params?: string) => {
    console.log(params);
    const startKey: any = paginationDecode(pagination);
    const query: IQuery = {
        model: Organization,
        pk: `${Organization_Sk}`,
        query: {
            index: SK_CREATED_AT_INDEX,
            reverse: true,
            startKey: startKey,
        }
    }
    return await getByIndex(query);
}



