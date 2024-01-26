import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongoadmin:12345@localhost:27017/'), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
