import { IsNumber, IsString } from "class-validator";
import { Workspace } from "src/module/workspaces/entities/workspace.entity";
import { Entity, PrimaryGeneratedColumn, Column,  OneToMany, JoinColumn } from "typeorm";

@Entity({name:'rooms'})
export class Room {
    
    @PrimaryGeneratedColumn()
    @IsNumber()
    id: number

    @Column()
    @IsString()
    name: string

    @OneToMany(() => Workspace, workspace => workspace.room_id)
    @JoinColumn()
    workspace: Workspace[] 
}
