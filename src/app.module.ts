import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { NotificationModule } from './notification/notification.module';
import { RouterModule, Routes } from 'nest-router';

const routes: Routes = [
  {
    path: '/auth',
    module: AuthModule
  },
  {
    path: '/notification',
    module: NotificationModule
  }
]

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    AuthModule,
    NotificationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
