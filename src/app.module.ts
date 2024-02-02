import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { join } from 'path';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongoadmin:12345@localhost:27017/'),
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true
  }),
    , TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
