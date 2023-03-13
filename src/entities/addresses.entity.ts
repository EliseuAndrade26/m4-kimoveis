import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { RealEstate } from "./realState.entity";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, type: "varchar" })
  street: string;

  @Column({ length: 8, type: "varchar" })
  zipCode: string;

  @Column({ length: 7, nullable: true, type: "varchar" })
  number: string | undefined | null;

  @Column({ length: 20, type: "varchar" })
  city: string;

  @Column({ length: 2, type: "varchar" })
  state: string;

  @OneToOne(() => RealEstate)
  realEstate: RealEstate;
}
