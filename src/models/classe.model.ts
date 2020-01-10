import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { etudiant } from './etudiant.model';
import { prof_classe } from './prof_classe.model';

@Table({timestamps: false})
export class classe extends Model<classe> {

  @Column({primaryKey: true, autoIncrement: true})
  num_classe: number;

  @Column
  nom_classe: string;

  @HasMany(() => etudiant)
  etudiants: etudiant[];

  @HasMany(() => prof_classe)
  prof_classes: prof_classe[];
}