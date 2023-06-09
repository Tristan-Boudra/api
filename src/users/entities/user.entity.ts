import { Exclude } from "class-transformer";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole { ADMIN = 'A', MEMBER = 'M', GUEST = 'G' }

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Index({ unique: true })
    @Column({ length: 150 })
    email!: string;

    @Exclude()
    @Column({ length: 200 })
    hash!: string;

    @Column({ length: 200 })
    name!: string;

    @Index({ unique: true })
    @Column({ type: 'enum', enum: UserRole })
    role!: UserRole;
}
