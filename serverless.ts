import type { AWS } from '@serverless/typescript';
import permissions from 'serverless/permissions';
import { login } from '@functions/login';
import { excludePackage } from 'serverless/packages';

const serverlessConfiguration: AWS = {
    useDotenv: true,
    service: 'at-email-service',
    frameworkVersion: '3',
    plugins: ['serverless-esbuild', 'serverless-offline', 'serverless-dotenv-plugin'],
    custom: {
        esbuild: {
            bundle: true,
            minify: false,
            sourcemap: true,
            exclude: excludePackage,
            target: 'node18',
            define: { 'require.resolve': undefined },
            platform: 'node',
            concurrency: 10
        },
        'serverless-offline': {
            httpPort: 6000,
            lambdaPort: 6601,
            useChildProcesses: true
        },
        region: '${env:REGION}',
        accountId: '${env:ACCOUNT_ID}',
        LambdaLayerVersion: '${env:LAMBDA_LAYER_VERSION}',
        API_NAME: '${env:API_NAME}',
    },
    provider: {
        name: 'aws',
        runtime: 'nodejs18.x',
        memorySize: 256,
        region: 'ap-south-1',
        stage: '${sls:stage}',
        httpApi: {
            cors: {
                allowCredentials: false,
                allowedHeaders: ['*'],
                allowedMethods: ['*'],
                allowedOrigins: ['*'],
                exposedResponseHeaders: ['*'],
                maxAge: 300,
            },
        },
        environment: {
            NODE_PATH: './:/opt/node_modules',
            REGION: '${self:custom.region}',
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
            NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
        },
        iam: {
            role: {
                statements: permissions
            }
        },
        layers: [
            'arn:aws:lambda:${self:custom.region}:${self:custom.accountId}:layer:GramSevaLayer:${self:custom.LambdaLayerVersion}',
        ],
    },
    // import the function via paths
    functions: {
        ...login
    },
    package: { individually: true }
};
module.exports = serverlessConfiguration;