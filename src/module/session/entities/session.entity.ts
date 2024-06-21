import { Reservation } from "src/module/reservation/entities/reservation.entity";
import { User } from "src/module/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'session'})
export class Sessions {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string

    @Column()
    since: Date

    @Column()
    until:Date

    @Column()
    user_id: number

    @ManyToOne(() => User, user => user.sessions)
    @JoinColumn({name: 'user_id'})
    user: User

    @OneToOne(() => Reservation, reservation => reservation.session)
    reservation: Reservation
}
