https://github.com/alura-cursos/3374-nodejs-express-sequelize/tree/arquivos-iniciais

## structure

model > service > controller > route

## sequelize

npx sequelize-cli init

npx sequelize-cli model:generate --name Person --attributes name:string,email:string,cpf:string,active:boolean,role:string
npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name demo-person
npx sequelize-cli db:seed:all

npx sequelize-cli model:generate --name Category --attributes title:string
npx sequelize-cli model:generate --name Course --attributes title:string,description:string,start_date:dateonly
npx sequelize-cli model:generate --name Enrollment --attributes status:string

do associations manually
npx sequelize-cli db:migrate

npx sequelize-cli seed:generate --name demo-category
npx sequelize-cli seed:generate --name demo-course
npx sequelize-cli seed:generate --name demo-enrollment

npx sequelize-cli db:seed --seed 20250131202650-demo-category.js
npx sequelize-cli db:seed --seed 20250131203050-demo-course.js
npx sequelize-cli db:seed --seed 20250131203112-demo-enrollment.js

- add deletedAt column
npx sequelize-cli db:migrate