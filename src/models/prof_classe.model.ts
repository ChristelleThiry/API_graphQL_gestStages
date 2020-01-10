import { Table, Column, Model, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { professeur } from './professeur.model';
import { classe } from './classe.model';

@Table({timestamps: false})
export class prof_classe extends Model<prof_classe> {

  @ForeignKey(() => classe)
  @Column({primaryKey: true, autoIncrement: false})
  num_classe: number;

  @ForeignKey(() => professeur)
  @Column({primaryKey: true, autoIncrement: false})
  num_prof: number;

  @Column
  est_prof_principal: boolean;

  @BelongsTo(() => classe)
  classe: classe;

  @BelongsTo(() => professeur)
  professeur: professeur;

}