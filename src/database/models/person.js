'use strict';
const isValidCpfValue = require('../../utils/validCpfHelper.js');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.hasMany(models.Course, {
        foreignKey: 'teacher_id'
      });
      Person.hasMany(models.Enrollment, {
        foreignKey: 'student_id',
        scope: { status: 'matriculado' },
        as: 'enrollmentClasses'
      });
      Person.hasMany(models.Enrollment, {
        foreignKey: 'student_id',
        as: 'allEnrollments'
      });
    }
  }
  Person.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 30],
          msg: 'Field name must have minimal three chars'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        isValidCpf: (cpf) => {
          if (!isValidCpfValue(cpf)) throw new Error('Invalid CPF number');
        }
      }
    },
    active: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
    tableName: 'person',
    paranoid: true,
    defaultScope: {
      where: {
        active: true,
      }
    },
    scopes: {
      allRecords: {
        where: {}
      }
    }
  });
  return Person;
};