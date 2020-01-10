import { resolver } from 'graphql-sequelize';
import { stage } from '../../models';
import to from 'await-to-js';

export const StageMap = {
    etudiant: resolver(stage.associations.etudiant),
    professeur: resolver(stage.associations.professeur),
    entreprise: resolver(stage.associations.entreprise),
    missions: resolver(stage.associations.missions)
};