import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { GoogleModule } from './google/google.module';
import { FacebookModule } from './facebook/facebook.module';

@Module({
  imports: [UsersModule, AuthModule, GoogleModule, FacebookModule],
  controllers: [AppController],
  providers: [AppService],  
})
export class AppModule {}
