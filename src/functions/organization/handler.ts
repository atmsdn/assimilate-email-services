import { pagination, response } from '@libs/api-gateway';
import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import {
    middyfy,
    middyfyAuth,
    // middyfyGet
} from '@libs/lambda';
import {
    OrgCreate,
    // GetItem
} from './interface';
import {
    createOrganizationDetails, getOrganization,
    // deleteOrganization, getAllOrganization,
    // updateOrganizationDetails
} from './organization.service';
import { ADMIN_ROLE, ORGANIZATION } from '@constants/constants';

const createOrganization = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {

        // @ts-ignore
        const obj: OrgCreate = JSON.parse(event.body);
        let timestamp = new Date().getTime();
        obj.ID = `${ORGANIZATION}#${timestamp}`;
        obj.SK = `${ORGANIZATION}`;
        obj.RoleId = obj.RoleId || ADMIN_ROLE;
        
        const organization = await createOrganizationDetails(obj);
        
        console.log('organization', organization, 'organization');

        // const user = createUser({
        //     ID: `User#${obj.Email}`,
        //     SK: `${ORGANIZATION}#${obj.ID}`,
        //     Email: obj.Email,
        //     Password: "password",
        //     RoleId: ADMIN_ROLE
        // })
        return response(200, { message: 'SUCCESS', item: organization });


    } catch (error) {
        console.log('error', error);
        return response(500, error);
    }
}

// const getOrganizationDetails = middyfyGet(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//     try {
//         // @ts-ignore
//         const obj: GetItem = event.queryStringParameters;
//         const organizationResponse = await getOrganization({ ID: obj.ID, SK: obj.SK });
//         if (organizationResponse.Item) {
//             const organizationDetails = organizationResponse.Item;
//             return response(200, { message: 'SUCCESS', item: organizationDetails });
//         } else {
//             return response(404, { message: 'ORGANIZATION_DETAILS_NOT_FOUND' });
//         }
//     } catch (error) {
//         console.log('error', error);
//         return response(500, error);
//     }
// });

// const deleteOrganizationDetails = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//     try {
//         // @ts-ignore
//         const obj: GetItem = event.queryStringParameters;
//         const organizationResponse = await deleteOrganization({ ID: obj.ID, SK: obj.SK });
//         if (organizationResponse.$metadata.httpStatusCode === 200) {
//             return response(200, { message: 'SUCCESS', item: null });
//         } else if (organizationResponse.$metadata.httpStatusCode === 404) {
//             return response(404, { message: 'ORGANIZATION_DETAILS_NOT_FOUND' });
//         }
//     } catch (error) {
//         console.log('error', error);
//         return response(500, error);
//     }
// });


// const updateOrganization = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//     try {
//         // @ts-ignore
//         const obj: OrgCreate = event.body;
//         if (!obj.Domain) {
//             return response(400, { message: 'ERROR_DOMAIN_REQUIRED' });
//         }
//         obj.ID = obj.Domain;
//         obj.SK = Organization_Sk;
//         const organization = await getOrganization({ ID: obj.ID, SK: obj.SK });
//         if (organization.Item) {
//             const updatedOrganization = await updateOrganizationDetails(obj);
//             return response(200, { message: 'Organization Updated Successfully', item: updatedOrganization });
//         } else {
//             return response(404, { message: 'ORGANIZATION_NOT_FOUND' });
//         }
//     } catch (error) {
//         console.log('error', error);
//         return response(500, error);
//     }
// });

// const getAll = middyfyGet(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//     try {
//         const userInformation: any = event.headers["user"];
//         const PK = `${userInformation.SK}`;
//         const organizationResponse = await getAllOrganization(event.queryStringParameters?.pagination, PK);
//         return pagination(200, organizationResponse)
//     } catch (error) {
//         console.log('error', error);
//         return response(500, error);
//     }
// });

export {
    createOrganization,
    // deleteOrganizationDetails, updateOrganization, getAll,getOrganizationDetails

}