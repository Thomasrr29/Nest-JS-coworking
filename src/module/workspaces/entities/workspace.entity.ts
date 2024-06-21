import { Reservation } from "src/module/reservation/entities/reservation.entity";
import { Room } from "src/module/rooms/entities/room.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:"workspace"})
export class Workspace {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    row: number

    @Column()
    column: number

    @Column()
    room_id: number

    @Column()
    status: "Busy" | "Available"

    @OneToMany(() => Reservation, reservation => reservation.workspace)
    reservation: Reservation[]

    @ManyToOne(() => Room, room => room.workspace)
    @JoinColumn({name:"room_id"})
    room: number

}
