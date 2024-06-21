import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateWorkspaceDto {

    @IsString()
    @IsNotEmpty()
    name:string

    @IsNumber()
    @IsNotEmpty()
    row: number

    @IsNumber()
    @IsNotEmpty()
    column: number

    @IsString()
    @IsNotEmpty()
    status: ["Busy" | "Available"]
}
