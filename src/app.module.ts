import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { hostname, type } from 'os';
import { UsersModule } from './users/users.module';
import { TokenController } from './token/token.controller';
import { User } from './users/entities/user.entity';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'api',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    TypeOrmModule.forFeature([
      User,
    ]),
  ],
  controllers: [AppController, TokenController],
  providers: [AppService, UsersService],
})
export class AppModule {}
