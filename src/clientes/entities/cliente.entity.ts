import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Cliente{
    [x: string]: any;
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    email: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    update_at: Date
}
