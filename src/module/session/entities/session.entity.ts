import { IsNumber, IsString, IsDate } from "class-validator";
import { Reservation } from "src/module/reservation/entities/reservation.entity";
import { User } from "src/module/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'session'})
export class Sessions {

    @PrimaryGeneratedColumn()
    @IsNumber()
    id:number

    @Column()
    @IsString()
    name: string

    @Column()
    @IsDate()
    since: Date

    @Column()
    @IsDate()
    until:Date

    @Column()
    @IsNumber()
    user_id: number

    @ManyToOne(() => User, user => user.sessions)
    @JoinColumn({name: 'user_id'})
    user: User

    @OneToOne(() => Reservation, reservation => reservation.session)
    reservation: Reservation
}
