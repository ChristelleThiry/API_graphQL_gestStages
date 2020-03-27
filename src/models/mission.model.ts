import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { stage } from "./stage.model";

@Table({timestamps: false})
export class mission extends Model<mission> {

  @Column({primaryKey: true, autoIncrement: true})
  num_mission: number;

  @Column
  libelle: string;

  @ForeignKey(() => stage)
  @Column
  num_stage: number;

  @BelongsTo(() => stage)
  stage: stage;

}