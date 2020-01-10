import { Table, Column, Model, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { specialite } from './specialite.model';
import { entreprise } from './entreprise.model';

@Table({timestamps: false})
export class spec_entreprise extends Model<spec_entreprise> {

  @ForeignKey(() => specialite)
  @Column({primaryKey: true, autoIncrement: false})
  num_spec: number;

  @ForeignKey(() => entreprise)
  @Column({primaryKey: true, autoIncrement: false})
  num_entreprise: number;

  @BelongsTo(() => specialite)
  specialite: specialite;

  @BelongsTo(() => entreprise)
  entreprise: entreprise;

}