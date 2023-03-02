import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("categires")
export default class Categories {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, unique: true, type: "varchar" })
  name: string;
}
