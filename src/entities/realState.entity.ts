import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import Addresses from "./addresses.entity";
import Categories from "./categories.entity";

@Entity("real_estate")
export default class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ default: false, type: "boolean" })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: string | Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: string | Date;

  @OneToOne(() => Addresses)
  @JoinColumn()
  address: Addresses;

  @ManyToOne(() => Categories, { nullable: true })
  categores?: Categories | undefined | null;
}
