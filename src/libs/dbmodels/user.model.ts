import { Entity, string, number, schema } from "dynamodb-toolbox";
import { TableCollect } from ".";

export const User = new Entity({
    name: "User",
    table: TableCollect,
    schema: schema({
        ID: string().key(),
        SK: string().key(),
        RoleId: number(),
        Email: string(),
        Password: string(),
        OrganizationPk: string()
    })
});