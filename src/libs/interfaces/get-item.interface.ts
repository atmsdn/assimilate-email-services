export interface GetItem {
    PK: string,
    SK: string
}

export interface IQuery {
    model: any,
    pk: string;
    query: {
        index: string,
        reverse?: boolean
        limit?: number,
        attributes?: any,
        filters?: any,
        startKey?: any
    }
}

