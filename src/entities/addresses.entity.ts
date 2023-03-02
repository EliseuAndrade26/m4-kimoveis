import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
export default class Addresses {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, type: "varchar" })
  street: string;

  @Column({ length: 8, type: "varchar" })
  zipCode: string;

  @Column({ length: 6, nullable: true, type: "varchar" })
  number: string | undefined | null;

  @Column({ length: 20, type: "varchar" })
  city: string;

  @Column({ length: 2, type: "varchar" })
  state: string;
}
