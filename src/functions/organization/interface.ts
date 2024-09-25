export interface OrgCreate {
    PK: string;
    ID: string,
    SK: string,
    Name: string,
    Email: string,
    MobileNo: string,
    Address: Address,
    isActive: string,
    RoleId?: number;
    OrganizationCode?: any;
    ApiKey?: string;
}

export interface Address {
    AddressLine1: string;
    AddressLine2: string;
    State: string;
    City: string;
    PinCode: number;
}
export interface GetItem {
    ID: string,
    SK: string
}


// export interface UserCreate {
//     ID: string,
//     SK: string,
//     RoleId: number,
//     Email: string,
//     Password: string
// }

export type UserItem = {
    ID: string;
    SK: string;
    Email: string;
    RoleId: number;
    Password: string;
    entity?: string;    // optional
    created?: Date;     // optional
    modified?: Date;    // optional
};
export interface Orgquery {
    model: any,
    pk: string;
    query: {
        index: string,
        reverse?: boolean
        startKey?: any;
    }
}

export interface AllOrgquery {
    model: any,
    sk: string;
    query: {
        index: string,
        reverse?: boolean
        startKey?: any;
    }
}