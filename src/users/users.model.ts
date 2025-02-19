import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class User extends Model{
    @Column({ type: DataType.STRING, allowNull: false, unique: true })
    username: string;

    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @Column({ type: DataType.STRING, allowNull: false, unique: true })
    email: string;
}