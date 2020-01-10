import { Table, Column, Model, HasMany, BelongsTo, ForeignKey, BeforeSave } from 'sequelize-typescript';
import { etudiant } from "./etudiant.model";
import { professeur } from "./professeur.model";
import { entreprise } from "./entreprise.model";
import { mission } from './mission.model';

@Table({timestamps: false})
export class stage extends Model<stage> {

  @Column({primaryKey: true, autoIncrement: true})
  num_stage: number;

  @Column
  debut_stage: Date;

  @Column
  fin_stage: Date;

  @Column
  type_stage: string;

  @Column
  desc_projet: string;

  @Column
  observation_stage: string;

  @ForeignKey(() => etudiant)
  @Column
  num_etudiant: number;

  @ForeignKey(() => professeur)
  @Column
  num_prof: number;

  @ForeignKey(() => entreprise)
  @Column
  num_entreprise: number;

  @BelongsTo(() => etudiant)
  etudiant: etudiant;

  @BelongsTo(() => professeur)
  professeur: professeur;

  @BelongsTo(() => entreprise)
  entreprise: entreprise;

  @HasMany(() => mission)
  missions: mission[];

}