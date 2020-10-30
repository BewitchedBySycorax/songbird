sequelize model:generate --name Bird --attributes name:string,species:string,group:string,description:text,image:text,audio:text --force
sequelize model:generate --name Player --attributes name:string --force
sequelize model:generate --name Game --attributes number:bigint,playerId:bigint,scores:integer  --force
