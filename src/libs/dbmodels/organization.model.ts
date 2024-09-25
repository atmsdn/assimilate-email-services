import { Entity, string, number, boolean, schema } from "dynamodb-toolbox";
import { TableCollect } from ".";

export const Organization = new Entity({
    name: "Organization",
    table: TableCollect,
    schema: schema({
        ID: string().key(),
        SK: string().key(),
        Name: string(),
        Email: string(),
        MobileNo: string(),
        Address: string(),
        isActive: boolean().default(false),
        RoleId: number().optional(),
        OrganizationCode: string(),
        ApiKey: string()
    })
});




