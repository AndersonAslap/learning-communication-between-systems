import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Course } from "../../../../course/infra/typeorm/entities/Course";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string; 

    @Column()
    description: string; 

    @ManyToOne(() => Course, (course) => course.id)
    courses: Course[];

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn() 
    updated_at: Date;
}