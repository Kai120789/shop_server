import { ApiProperty } from "@nestjs/swagger";

export class LoginUserRequest {
    @ApiProperty({ example: "Ivan" })
    username: string

    @ApiProperty({ example: "pass1234" })
    password: string

    @ApiProperty({ example: "email@mail.ru" })
    email: string
}

export class LoginUserResponse {
    @ApiProperty({ example: {user: {
        userId: 1,
        username: "Ivan",
        password: "pass1234"
    }} })

    user: {
        userId: number
        username: string
        password: string
    }

    @ApiProperty({ example: "logged in" })
    msg: string
}

export class LogoutUserResponse {
    @ApiProperty({ example: "session has ended" })
    msg: string
}

export class LoginCheckResponse {
    @ApiProperty({ example: 1 })
    userId: number

    @ApiProperty({ example: "Ivan" })
    username: string

    @ApiProperty({ example: "email@mail.ru" })
    email: string
}

export class SignupResponse {
    @ApiProperty({ example: 1 })
    id: number

    @ApiProperty({ example: "Ivan" })
    username: string

    @ApiProperty({ example: "email@mail.ru" })
    password: string

    @ApiProperty({ example: "$2b$10$MhIrWMlIwq2spzqZZrva7e94Wecg/P.0DnTBebMoUEnPvez1uXR8q" })
    email: string

    @ApiProperty({ example: "2025-02-20T17:16:05.492Z" })
    updatedAt: string

    @ApiProperty({ example: "2025-02-20T17:16:05.492Z" })
    createdAt: string
}