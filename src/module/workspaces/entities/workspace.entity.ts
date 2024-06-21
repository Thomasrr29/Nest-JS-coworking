import { IsNumber, IsString } from "class-validator";
import { Reservation } from "src/module/reservation/entities/reservation.entity";
import { Room } from "src/module/rooms/entities/room.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:"workspace"})
export class Workspace {

    @PrimaryGeneratedColumn()
    @IsNumber()
    id:number

    @Column()
    @IsString()
    name:string

    @Column()
    @IsNumber()
    row: number

    @Column()
    @IsNumber()
    column: number

    @Column()
    @IsNumber()
    room_id: number

    @Column({type: "varchar"})
    status: "Busy" | "Available"

    @OneToMany(() => Reservation, reservation => reservation.workspace)
    reservation: Reservation[]

    @ManyToOne(() => Room, room => room.workspace)
    @JoinColumn({name:"room_id"})
    room: number

}
