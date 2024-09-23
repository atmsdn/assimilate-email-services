import { handlerPath } from '@libs/handler-resolver';

export const login = {
    signIn: {
        handler: `${handlerPath(__dirname)}/login.signIn`,
        events: [
            {
                httpApi: {
                    method: 'post',
                    path: '/login'
                },
            },
        ]
    }
};