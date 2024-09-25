import { DynamoDB } from 'aws-sdk';
const documentClient = new DynamoDB.DocumentClient();
import { GetItem } from "@libs/interfaces/get-item.interface"

// export const getUserById = async (params: GetItem) => {
//     return await User.get({ ID: params.ID, SK: params.SK })
// }

export const getUserById = async (params: GetItem) => {
    return await documentClient.get({
        TableName: 'User',
        Key: {
            ID: params.ID,
            SK: params.SK
        }
    }).promise();
};
