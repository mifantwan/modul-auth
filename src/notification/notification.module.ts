import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { EmailModule } from './email/email.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { MessageModule } from './message/message.module';
import { RouterModule, Routes } from 'nest-router';

const routes: Routes = [
  {
    path: '/email',
    module: EmailModule
  },
  {
    path: '/message',
    module: MessageModule
  },
  {
    path: '/whatsapp',
    module: WhatsappModule
  }
]

@Module({
  controllers: [NotificationController],
  providers: [NotificationService],
  imports: [
    RouterModule.forRoutes(routes),
    EmailModule,
    WhatsappModule,
    MessageModule
  ]
})
export class NotificationModule {}
