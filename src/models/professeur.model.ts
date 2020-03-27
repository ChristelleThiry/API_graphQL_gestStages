import { Table, Column, Model, HasMany, BeforeSave } from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';
import to from 'await-to-js';
import * as jsonwebtoken from'jsonwebtoken';
import { ENV } from '../config';
import { prof_classe } from './prof_classe.model';

@Table({timestamps: false})
export class professeur extends Model<professeur> {

  @Column({primaryKey: true, autoIncrement: true})
  num_prof: number;

  @Column({defaultValue: ""})
  nom_prof: string;

  @Column({defaultValue: ""})
  prenom_prof: string;

  @Column({unique: true})
  login: string;

  @Column({defaultValue: ""})
  mdp: string;

  @Column({defaultValue: ""})
  email: string;

  @HasMany(() => prof_classe)
  prof_classes: prof_classe[];

  jwt: string;
  connect: boolean;
  @BeforeSave
  static async hashPassword(professeur: professeur) {
    let err;
    if (professeur.changed('mdp')){
        let salt, hash;
        [err, salt] = await to(bcrypt.genSalt(10));
        if(err) {
          throw err;
        }

        [err, hash] = await to(bcrypt.hash(professeur.mdp, salt));
        if(err) {
          throw err;
        }
        professeur.mdp = hash;
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
          num_prof: this.num_prof,
      }, ENV.JWT_ENCRYPTION, { expiresIn: ENV.JWT_EXPIRATION });
  }
}