import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import RealEstate from "./realState.entity";

@Entity("schedules_users_properties")
export default class SchedulesUsersProperties {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: Date;

  @ManyToOne(() => RealEstate)
  realEstate: RealEstate;
}
