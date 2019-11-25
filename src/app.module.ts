import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

const MONGODB_URI_LOCAL = 'mongodb://localhost/nestjs-crud';

@Module({
  imports: [UserModule,
    MongooseModule.forRoot(process.env.MONGODB_URI || MONGODB_URI_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
