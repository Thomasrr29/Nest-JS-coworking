import { Module } from '@nestjs/common';
import { RoomsModule } from './rooms/rooms.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { UsersModule } from './users/users.module';
import { ReservationModule } from './reservation/reservation.module';
import { SessionModule } from './session/session.module';

@Module({
  imports: [RoomsModule, WorkspacesModule, UsersModule, ReservationModule, SessionModule]
})
export class ModuleModule {}
