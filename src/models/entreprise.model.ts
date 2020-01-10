import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { spec_entreprise } from './spec_entreprise.model';

@Table({timestamps: false})
export class entreprise extends Model<entreprise> {

  @Column({primaryKey: true, autoIncrement: true})
  num_entreprise: number;

  @Column
  raison_sociale: string;

  @Column
  nom_contact: string;

  @Column
  nom_resp: string;

  @Column
  rue_entreprise: string;

  @Column
  cp_entreprise: number;

  @Column
  ville_entreprise: string;

  @Column
  tel_entreprise: string;

  @Column
  fax_entreprise: string;

  @Column
  email: string;

  @Column
  observation: string;

  @Column
  site_entreprise: string;

  @Column
  niveau: string;

  @Column
  en_activite: number;

  @HasMany(() => spec_entreprise)
  spec_entreprises: spec_entreprise[];

}