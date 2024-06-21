import { Module, Session } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from 'src/module/reservation/entities/reservation.entity';
import { Room } from 'src/module/rooms/entities/room.entity';
import { Sessions } from 'src/module/session/entities/session.entity';
import { User } from 'src/module/users/entities/user.entity';
import { Workspace } from 'src/module/workspaces/entities/workspace.entity';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),

        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            autoLoadEntities: true,
            synchronize: false,
            "ssl": {
                "rejectUnauthorized": true
            }

        })
    ]
})
export class PersistenceModule {}
