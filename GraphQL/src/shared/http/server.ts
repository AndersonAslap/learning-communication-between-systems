import 'reflect-metadata';

import path from 'node:path';

import { ApolloServer } from 'apollo-server';
import { buildSchema } from "type-graphql";
import { CategoryResolver } from '../../modules/category/infra/resolver/category-resolver';

async function bootstrap() {

  const schema = await buildSchema({
    resolvers: [
      CategoryResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'shema.gql')
  }); 

  const server = new ApolloServer({
    schema
  });

  await server.listen();
}

bootstrap();