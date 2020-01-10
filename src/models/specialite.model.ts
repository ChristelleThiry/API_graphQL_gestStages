import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { spec_entreprise } from './spec_entreprise.model';

@Table({timestamps: false})
export class specialite extends Model<specialite> {

  @Column({primaryKey: true, autoIncrement: true})
  num_spec: number;

  @Column
  libelle: string;

  @HasMany(() => spec_entreprise)
  spec_entreprises: spec_entreprise[];

}