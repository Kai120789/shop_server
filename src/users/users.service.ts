import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) {}

    findOne(filter: {
        where: { id?: string; username?: string; email?: string; }
    }) : Promise<User | null> {
        return this.userModel.findOne({ ...filter })
    }

    async create(
        createUserDto: CreateUserDto
    ): Promise<User | { warningMessage: string }> {
        const existingByUserName = await this.findOne({
            where: { username: createUserDto.username }
        })

        const existingByEmail = await this.findOne({
            where: { email: createUserDto.email }
        })

        if (existingByUserName) {
            return { warningMessage: 'Пользователь с таким именем уже существует' }
        }

        if (existingByEmail) {
            return { warningMessage: 'Пользователь с такой почтой уже существует' }
        }

        const hashedPassword = await bcrypt.hash(createUserDto.password, 10)

        const user = await this.userModel.create(
            {
                username: createUserDto.username,
                password: hashedPassword,
                email: createUserDto.email,
            },
            { raw: true }
        );

        return user;
    }
}
