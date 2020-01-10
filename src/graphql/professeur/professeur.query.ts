import { resolver } from 'graphql-sequelize';
import { professeur } from '../../models';
import to from 'await-to-js';

export const Query = {
    getProfesseur: resolver(professeur, {
        before: async (findOptions, {}, {user}) => {
            findOptions.where = {num_prof: user.num_prof};
            return findOptions;
        },
        after: (professeur) => {
            console.log("je rentre bien icic ? : " + JSON.stringify(professeur));
            return professeur;
        }
    }),
    loginProfesseur: resolver(professeur, {
        before: async (findOptions, { login }) => {
            findOptions.where = {login};
            return findOptions;
        },
        after: async (prof, { password }) => {
            let err;
            [err, prof] = await to(prof.comparePassword(password));
            if(err) {
              console.log(err);
              throw new Error(err);
            }

            prof.connect = true;//to let the directive know to that this user is authenticated without an authorization header
            return prof;
        }
    }),
    getProfByName: resolver(professeur, {
        after: async (findOptions, { nom_prof }) => {
            findOptions.where = {nom_prof};
            return findOptions;
        }
    })
};