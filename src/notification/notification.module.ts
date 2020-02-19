import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { EmailModule } from './email/email.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { MessageModule } from './message/message.module';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService],
  imports: [EmailModule, WhatsappModule, MessageModule]
})
export class NotificationModule {}
