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
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, type: "varchar" })
  name: string;

  @Column({ length: 45, unique: true, type: "varchar" })
  email: string;

  @Column({ default: false, type: "boolean" })
  admin: undefined | boolean;

  @Column({ length: 120, type: "varchar" })
  password: string;

  @CreateDateColumn()
  createdAt: string | Date;

  @UpdateDateColumn()
  updatedAt: string | Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt: string | undefined | null | Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}
