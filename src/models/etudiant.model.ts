import { Table, Column, Model, HasMany, BelongsTo, ForeignKey, BeforeSave } from 'sequelize-typescript';
import { classe } from "./classe.model";
import * as bcrypt from 'bcrypt';
import to from 'await-to-js';
import * as jsonwebtoken from'jsonwebtoken';
import { ENV } from '../config';

@Table({timestamps: false})
export class etudiant extends Model<etudiant> {

  @Column({primaryKey: true, autoIncrement: true})
  num_etudiant: number;

  @Column({defaultValue: ""})
  nom_etudiant: string;

  @Column({defaultValue: ""})
  prenom_etudiant: string;

  @Column
  annee_obtention: Date;

  @Column({unique: true})
  login: string;

  @Column({defaultValue: ""})
  mdp: string;

  @ForeignKey(() => classe)
  @Column({defaultValue: 1})
  num_classe: number;

  @BelongsTo(() => classe)
  classe: classe;

  jwt: string;
  connect: boolean;
  @BeforeSave
  static async hashPassword(etudiant: etudiant) {
    let err;
    if (etudiant.changed('mdp')){
        let salt, hash;
        [err, salt] = await to(bcrypt.genSalt(10));
        if(err) {
          throw err;
        }

        [err, hash] = await to(bcrypt.hash(etudiant.mdp, salt));
        if(err) {
          throw err;
        }
        etudiant.mdp = hash;
    }
  }

  async comparePassword(pw) {
      let err, pass;
      if(!this.mdp) {
        throw new Error('Does not have password');
      }

      [err, pass] = await to(bcrypt.compare(pw, this.mdp));
      if(err) {
        throw err;
      }

      if(!pass) {
        throw 'Invalid password';
      }

      return this;
  }

  getJwt(){
      return 'Bearer ' + jsonwebtoken.sign({
          num_etudiant: this.num_etudiant,
      }, ENV.JWT_ENCRYPTION, { expiresIn: ENV.JWT_EXPIRATION });
  }
}