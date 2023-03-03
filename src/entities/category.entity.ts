import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("categires")
export class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, unique: true, type: "varchar" })
  name: string;
}
