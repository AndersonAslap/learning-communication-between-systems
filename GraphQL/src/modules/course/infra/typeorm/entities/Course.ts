import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,  UpdateDateColumn } from "typeorm";
import { Category } from "../../../../category/infra/typeorm/entities/Category";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string; 

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn() 
    updated_at: Date;
}