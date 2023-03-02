import { getRounds, hashSync } from "bcryptjs";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";

@Entity("users")
export default class Users {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, type: "varchar" })
  name: string;

  @Column({ length: 45, unique: true, type: "varchar" })
  email: string;

  @Column({ type: "boolean" })
  admin: boolean;

  @Column({ length: 120, type: "varchar" })
  password: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: string | Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: string | Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt: string | Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}
