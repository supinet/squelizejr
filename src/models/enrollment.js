'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    static associate(models) {
      Enrollment.belongsTo(models.Person, {
        foreignKey: 'student_id'
      });
      Enrollment.belongsTo(models.Course, {
        foreignKey: 'course_id'
      })
    }
  }
  Enrollment.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enrollment',
    tableName: 'enrollment'
  });
  return Enrollment;
};