
// import { User } from "@libs/dbmodels/user.model";
import { GetItem, OrgCreate } from "./interface";
import { paginationDecode } from "@libs/api-gateway";
import { ORGANIZATION, SK_CREATED_AT } from "@constants/constants";
import { IQuery } from "@libs/interfaces/get-item.interface";
import { getByIndex } from "@libs/helpers/dynamodb.helper";
import { Organization } from "@libs/dbmodels/organization.model";
import { GetItemCommand, KeyInput, PutItemCommand } from "dynamodb-toolbox";
// import { User } from "@libs/dbmodels/user.model";


export const createOrganizationDetails = async (obj: OrgCreate) => {
    return await Organization.build(PutItemCommand)
        .item({
            ID: obj.ID,
            SK: obj.SK,
            Name: obj.Name,
            Email: obj.Email,
            MobileNo: obj.MobileNo,
            Address: obj.Address,
            isActive: true,
            RoleId: obj.RoleId,
            OrganizationCode: obj.OrganizationCode,
            ApiKey: obj.ApiKey,
            entity: "Organization",
            created: (new Date().getTime()).toString(),
            modified: (new Date().getTime()).toString()
        })

        .send();
}



export const getOrganization = async (params: GetItem) => {
    const key: KeyInput<typeof Organization> = {
        ID: params.ID,
        SK: params.SK
    }
    console.log(key, 'key')
    return await Organization.build(GetItemCommand)
        .key(key)
        .send()
};

export const deleteOrganization = async (params: GetItem) => {
    // return await Organization.delete({ ID: params.ID, SK: params.SK })
}


export const createUser = async (obj: any) => {
    const userItem: any = {
        ID: obj.ID,
        SK: obj.SK,
        Email: obj.Email,
        RoleId: obj.RoleId,
        Password: obj.Password,
    };
    // const data = await User.build(PutItemCommand).item(userItem).send();
    // return data
};




export const updateOrganizationDetails = async (obj: OrgCreate) => {
    // return await Organization.put(obj, {
    //     strictSchemaCheck: true
    // });
}
export const getAllOrganization = async (pagination?: string, params?: string) => {
    console.log(params);
    const startKey: any = paginationDecode(pagination);
    const query: IQuery = {
        model: Organization,
        pk: `${ORGANIZATION}`,
        query: {
            index: SK_CREATED_AT,
            reverse: true,
            startKey: startKey,
        }
    }
    return await getByIndex(query);
}



