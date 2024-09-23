import { IQuery } from "@libs/interfaces/get-item.interface";

export const getByIndex = async ({ model, pk, query }: IQuery) => {
    return await model.query(pk, query);
}