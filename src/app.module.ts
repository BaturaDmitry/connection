import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GoogleModule } from './google/google.module';
import { FacebookModule } from './facebook/facebook.module';
import { getEnvPath } from './common/helper/env.helper';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);
@Module({
  imports: [ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }), AuthModule, GoogleModule, FacebookModule,],
  controllers: [AppController],
  providers: [AppService],  
})
export class AppModule {}
