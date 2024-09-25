import { handlerPath } from '@libs/handler-resolver';

export const organization = {
    addOrganization: {
        handler: `${handlerPath(__dirname)}/handler.createOrganization`,
        events: [
            {
                httpApi: {
                    method: 'post',
                    path: '/addOrganization',
                },
            },
        ]
    },
    // getOrganization: {
    //     handler: `${handlerPath(__dirname)}/handler.getOrganizationDetails`,
    //     events: [
    //         {
    //             httpApi: {
    //                 method: 'get',
    //                 path: '/getOrganization',
    //             },
    //         },
    //     ]
    // },
    // deleteOrganization: {
    //     handler: `${handlerPath(__dirname)}/handler.deleteOrganizationDetails`,
    //     events: [
    //         {
    //             httpApi: {
    //                 method: 'delete',
    //                 path: '/deleteOrganization',
    //             },
    //         },
    //     ]
    // },
    // updateOrganization: {
    //     handler: `${handlerPath(__dirname)}/handler.updateOrganization`,
    //     events: [
    //         {
    //             httpApi: {
    //                 method: 'put',
    //                 path: '/organization/updateOrganization',
    //             },
    //         },
    //     ]
    // },
    // getAllOrganization: {
    //     handler: `${handlerPath(__dirname)}/handler.getAll`,
    //     events: [
    //         {
    //             httpApi: {
    //                 method: 'get',
    //                 path: '/organization/getAll',
    //             },
    //         },
    //     ]
    // },
};