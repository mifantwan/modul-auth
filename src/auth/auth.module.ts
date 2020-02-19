import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { RecoveryModule } from './recovery/recovery.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [LoginModule, RegisterModule, RecoveryModule]
})
export class AuthModule {}
