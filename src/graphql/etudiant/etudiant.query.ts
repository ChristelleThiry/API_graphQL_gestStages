import { resolver } from 'graphql-sequelize';
import { etudiant } from '../../models';
import to from 'await-to-js';

export const Query = {
    getEtudiant: resolver(etudiant, {
        before: (findOptions, {}, {user}) => {
            findOptions.where = {num_etudiant: user.num_etudiant};
            return findOptions;
        },
        after: (student) => {
            return student;
        }
    }),
    loginEtudiant: resolver(etudiant, {
        before: (findOptions, { login }) => {
            findOptions.where = {login};
            return findOptions;
        },
        after: async (student, { password }) => {
            let err;
            [err, student] = await to(student.comparePassword(password));
            if(err) {
              console.log(err);
              throw new Error(err);
            }

            student.connect = true;//to let the directive know to that this user is authenticated without an authorization header
            return student;
        }
    }),
    getAllStudents: resolver(etudiant),
    getStudentByName: resolver(etudiant, {
        after: (findOptions, { nom_etudiant }) => {
            findOptions.where = {nom_etudiant};
            return findOptions;
        }
    })
};