import { IsNumber } from "class-validator";
import { Sessions } from "src/module/session/entities/session.entity";
import { User } from "src/module/users/entities/user.entity";
import { Workspace } from "src/module/workspaces/entities/workspace.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'reservations'})
export class Reservation {

    @PrimaryGeneratedColumn()
    @IsNumber()
    id: number

    @Column()
    @IsNumber()
    session_id: number

    @Column()
    @IsNumber()
    workspace_id: number

    @Column()
    @IsNumber()
    user_id: number

    @OneToOne(() => Sessions, session => session.reservation)
    @JoinColumn({name:"session_id"})
    session: Sessions

    @ManyToOne(() => User, user => user.reservations)
    @JoinColumn({name:"user_id"})
    user: User

    @ManyToOne(() => Workspace, workspace => workspace.reservation)
    @JoinColumn({name:"workspace_id"})
    workspace: Workspace
    
}
