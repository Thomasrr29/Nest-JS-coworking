
import { Reservation } from "src/module/reservation/entities/reservation.entity";
import { Sessions } from "src/module/session/entities/session.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'users'})
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email:string

    @Column()
    cellphone: string 

    @OneToMany(() => Reservation, reservation => reservation.user)
    reservations: Reservation[]

    @OneToMany(() => Sessions, session => session.user_id)
    sessions: Sessions[]
}
