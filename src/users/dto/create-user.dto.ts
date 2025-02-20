import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: "Ivan" })
    @IsNotEmpty()
    readonly username: string

    @ApiProperty({ example: "pass1234" })
    @IsNotEmpty()
    readonly password: string

    @ApiProperty({ example: "email@mail.ru" })
    @IsNotEmpty()
    readonly email: string
}