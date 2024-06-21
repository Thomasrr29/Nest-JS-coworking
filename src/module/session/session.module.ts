import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sessions } from './entities/session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sessions])],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}
