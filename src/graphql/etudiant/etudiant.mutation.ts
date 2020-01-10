import { resolver as rs } from 'graphql-sequelize';
import { etudiant } from '../../models';
import to from 'await-to-js';
import sequelize = require('sequelize');

export const Mutation = {
    createEtudiant: rs(etudiant, {
      before: async (findOptions, { data }) => {
        let err, student;
        console.log(JSON.stringify(data));
        [err, student] = await to(etudiant.create(data) );
        if (err) {
          throw err;
        }
        findOptions.where = { num_etudiant:student.num_etudiant };
        return findOptions;
      },
      after: (student) => {
        student.connect = true;
        return student;
      }
    }),

    updateEtudiant: rs(etudiant, {
      before: async (findOptions, { data }) => {
        let err, student;
        console.log(JSON.stringify(data));
        const update: sequelize.UpdateOptions = {
          where: { num_etudiant: data.num_etudiant },
          limit: 1
        };
        [err, student] = await to(etudiant.update(update, data));
        if (err) {
          throw err;
        }
        findOptions.where = { num_etudiant: data.num_etudiant };
        return findOptions;
      },
      after: (student) => {
        student.connect = true;
        return student;
      }
    }),
};