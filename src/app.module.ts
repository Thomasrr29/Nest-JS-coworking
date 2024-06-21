import { Module, OnModuleInit } from '@nestjs/common';
import { ModuleModule } from './module/module.module';
import { PersistenceModule } from './persistence/persistence.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workspace } from './module/workspaces/entities/workspace.entity';
import { Reservation } from './module/reservation/entities/reservation.entity';
import { User } from './module/users/entities/user.entity';
import { Room } from './module/rooms/entities/room.entity';
import { Sessions } from './module/session/entities/session.entity';

@Module({
  imports: [ModuleModule, PersistenceModule]
})
export class AppModule {
}
